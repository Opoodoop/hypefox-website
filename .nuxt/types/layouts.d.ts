import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "about" | "home" | "portfolio" | "team"
declare module "C:/Users/ItzEx/OneDrive/Desktop/Projects/Hypefox Studios/Website/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}