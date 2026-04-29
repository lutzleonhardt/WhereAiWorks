import { getCollection, getEntry } from 'astro:content';
import { loadSources } from './data';
import { buildUseCaseDetailView, type UseCaseDetailView } from './use-case-detail';

export type FinderUseCase = {
  id: string;
  title: string;
  roles: string[];
  goal_label: string;
  stage_id: string;
  stage_name: string;
  stage_slug: string;
  use_case_slug: string;
  result_path: string;
  useCase: UseCaseDetailView;
};

export type FinderOption = Pick<
  FinderUseCase,
  'id' | 'roles' | 'goal_label' | 'result_path'
>;

export async function loadFinderUseCases(): Promise<FinderUseCase[]> {
  const sources = loadSources();
  const sourcesById = new Map(sources.map((source) => [source.id, source] as const));
  const useCaseEntries = await getCollection('use_cases');

  const assembled = await Promise.all(
    useCaseEntries.map(async (entry) => {
      const stage = await getEntry(entry.data.stage);
      const useCaseSlug = entry.slug.split('/').pop()!;
      const stageSlug = stage.slug;

      return {
        id: `${stageSlug}:${useCaseSlug}`,
        title: entry.data.title,
        roles: entry.data.roles,
        goal_label: entry.data.goal_label,
        stage_id: stageSlug,
        stage_name: stage.data.name,
        stage_slug: stageSlug,
        use_case_slug: useCaseSlug,
        result_path: `/finder/results/${stageSlug}/${useCaseSlug}/`,
        useCase: buildUseCaseDetailView(entry.data, sourcesById),
        _stageOrder: stage.data.order,
        _ucOrder: entry.data.order,
      };
    })
  );

  assembled.sort((a, b) => {
    if (a._stageOrder !== b._stageOrder) return a._stageOrder - b._stageOrder;
    return a._ucOrder - b._ucOrder;
  });

  return assembled.map(({ _stageOrder, _ucOrder, ...rest }) => rest);
}

export async function loadFinderOptions(): Promise<FinderOption[]> {
  const useCases = await loadFinderUseCases();
  return useCases.map(({ id, roles, goal_label, result_path }) => ({
    id,
    roles,
    goal_label,
    result_path,
  }));
}
