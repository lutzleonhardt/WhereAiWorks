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
  category: string;
  url: string;
  maturity: 'production' | 'experimental';
  pricing?: string;
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
