export function sentenceMaker(folder) {
    let selected;
    switch (folder) {
        case 'root':
            selected = "--workspace-root"
            break;
         case 'factory':
            selected = "--filter factory"
            break;
         case 'shop':
            selected = "--filter shop"
            break;
    }

    return selected
}