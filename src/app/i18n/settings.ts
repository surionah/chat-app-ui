export const fallbackLanguage = "en";
export const languages = [fallbackLanguage, "es"];
export const defaultNamespace = "home";

export function getOptions(lng = fallbackLanguage, ns = defaultNamespace) {
  return {
    supportedLngs: languages,
    fallbackLng: fallbackLanguage,
    lng,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns,
  };
}
