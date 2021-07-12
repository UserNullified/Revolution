export default function searchInput(profiles, input) {
    if(input.length != 0) {
        let searchFilter = {
            name: '',
            type: '',
            version: ''
        };
    
        let lowercaseSearch = input.toLowerCase();
        let trimmedSearch = lowercaseSearch.replace(/ /g, '');
        let splitSearch = trimmedSearch.split(';');
    
        splitSearch.forEach((part) => {
            if(part.startsWith('type:')) {
                searchFilter.type = part.replace('type:', '');
            } else if(part.startsWith('version:')) {
                searchFilter.version = part.replace('version:', '');
            } else if(part.length != 0){
                searchFilter.name = part;
            }
        });
    
        let candidates = profiles;
    
        if(searchFilter.name.length != 0) {
            candidates = candidates.filter(profile => {
                if(profile.name.toLowerCase().replace(/ /g, '').indexOf(searchFilter.name) != -1) {
                    return profile;
                }
            });
        }
    
    
        if(searchFilter.type.length != 0) {
            candidates = candidates.filter(profile => {
                if(profile.type.toLowerCase().replace(/ /g, '').indexOf(searchFilter.type) != -1) {
                    return profile;
                }
            })
        }
        
        if(searchFilter.version.length != 0) {
            candidates = candidates.filter(profile => {
                if(profile.version.toLowerCase().replace(/ /g, '').indexOf(searchFilter.version) != -1) {
                    return profile;
                }
            })
        }
    
        return candidates;
    }
}