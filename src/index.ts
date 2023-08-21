import mapper from './mapper';

export default function getLanguage(extension: string) {
  const language = mapper[extension];
  if (!language) {
    return 'unknown';
  }
  return language;
}
