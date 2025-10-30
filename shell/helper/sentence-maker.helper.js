export function sentenceMaker(folder) {
    let selected;
    switch (folder) {
        case 'root':
            selected = "--workspace-root"
            break;
         case 'api':
            selected = "--filter api"
            break;
         case 'client':
            selected = "--filter client"
            break;
    }

    return selected
}