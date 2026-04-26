import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import yaml from 'js-yaml';

export type RoleEntry = {
  id: string;
  name: string;
  aliases?: string[];
};

export type ToolEntry = {
  id: string;
  name: string;
  vendor?: string;
  description?: string;
  category: string;
  url: string;
  maturity: 'production' | 'experimental';
  pricing?: string;
};

export type SourceType =
  | 'study'
  | 'case_study'
  | 'vendor'
  | 'vendor_doc'
  | 'community'
  | 'review'
  | 'blog'
  | 'documentation'
  | 'news';

export type SourceEntry = {
  id: string;
  label: string;
  url?: string;
  type: SourceType;
  captured_at?: string;
};

function readYaml<T>(relPath: string): T {
  const abs = resolve(process.cwd(), relPath);
  return yaml.load(readFileSync(abs, 'utf8')) as T;
}

export function loadRoles(): RoleEntry[] {
  return readYaml<RoleEntry[]>('src/data/roles.yaml');
}

export function loadTools(): ToolEntry[] {
  return readYaml<ToolEntry[]>('src/data/tools.yaml');
}

export function loadSources(): SourceEntry[] {
  return readYaml<SourceEntry[]>('src/data/sources.yaml');
}
