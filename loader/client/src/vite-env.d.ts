/// <reference types="vite/client" />

// interface ViteTypeOptions{

// }

interface ImportMetaEnv{
    readonly ACCESS_TOKEN:string
    readonly USERNAME:string
}

interface ImportMeta {
    readonly env:ImportMetaEnv
}