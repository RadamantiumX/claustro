const config = {
    apps: [
        {
            name: 'app',
            script: '../index.ts',
            watch: true,
            ignore_watch: ['node_modules', 'logs']
        }
    ]
}

export { config }