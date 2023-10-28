import { FetchContent } from '/utils/NFC-modules/scripts/init/provider.js';
import { CreateAuthors,CreateWorks } from '/sesame/scripts/utils/pops.js'

export async function GenerateNewEvent() {
    const event = await FetchContent("/sesame/scripts/events/test.json","json");
    await NewEvent(event);

    async function NewEvent(e) {
        const event = e;
        const container = document.querySelector('.sesame-news');

        const eventContainer = document.createElement("div");
        eventContainer.classList.add("event");


        
        const header = document.createElement("div");
        header.classList.add("event-header");
        
        const sesameHeader = document.createElement("div");
        sesameHeader.classList.add("sesame-header");
        sesameHeader.textContent = `The Starblast community is hosting ${event.length > 1 ? 'events' : 'an event'}`;
        
        const additionalInfo = document.createElement("div");
        additionalInfo.classList.add("additional-informations");
        additionalInfo.textContent = `${event.length} event${event.length > 1 ? 's' : ''} ${event.length > 1 ? 'are' : 'is'} coming in the next weeks`;
        
        const postersCreations = document.createElement("div");
        postersCreations.classList.add("posters-creations");


        const posterCount = event.length > 2 ? 2 : event.length;
        for (let i = 0 ; i < posterCount; i++) {
            const element = event[i];
            console.log(element)
            const posterImage = document.createElement('div');
            posterImage.classList.add('cover-poster');
            posterImage.innerHTML = `
                <img src="${element.medias.poster}">
            `;
            posterImage.style.left = (i+1)*30 + "px";
            posterImage.style.zIndex = i + 1;
            let scale = 1;
            if (i+1 >= 1) {
                scale -= 0.1 * (i+1)
            }
            posterImage.style.transform = `scale(${scale})`;

            postersCreations.appendChild(posterImage);
        }

        if (event.length > posterCount) {
            const posterMore = document.createElement('div');
            posterMore.classList.add('cover-poster');
            posterMore.classList.add('moreInfos');
            posterMore.style.zIndex = posterCount;
            posterMore.style.left = 50 + 20*posterCount + 'px';
            posterMore.style.transform = `scale(${1 - posterCount*(posterCount/10)})`;
            posterMore.innerHTML = `
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </div>
                    <div class="text">
                        ${event.length - posterCount}
                    </div>
            `;
        
            postersCreations.appendChild(posterMore);
            
        }
        
        
        header.appendChild(sesameHeader);
        header.appendChild(additionalInfo);
        eventContainer.appendChild(header);
        eventContainer.appendChild(postersCreations);
        container.appendChild(eventContainer);
        const BeforeHeight = container.querySelector('.event').offsetHeight + 20;
        container.querySelector('.event').addEventListener('click', function() {
            if (!container.classList.contains('viewEvent')) {
                container.style.height = BeforeHeight + "px";
                setTimeout(() => {
                    container.style.height = (window.innerHeight*90)/100 + 'px'; 
                    container.classList.add('viewEvent');
                    setTimeout(async () => {
                        container.scrollIntoView({ behavior: 'smooth' });
                        await GenerateContent(event,container);
                    }, 300);
                }, 0);
            }
        });



        const close = document.createElement('div');
        close.classList.add('closePannel');
        close.innerHTML += `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z"/></svg>
        `;
        close.addEventListener('click',function() {
            container.classList.remove('viewEvent');
            document.querySelector('.event-container').remove()
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // For smooth scrolling
            });
        })
        container.appendChild(close);

    }
}





async function GenerateContent(event,container) {


    event.forEach(async (element) => {
        const eventContainer = document.createElement('div');
        eventContainer.classList.add('event-container');

        const eventHeader = document.createElement('div');
        eventHeader.classList.add('event-header');

        eventHeader.innerHTML = `
            <div class="event-content-important">
                ${
                    element.official == 1 ? `
                        <div class="event-certif">
                            Official Event
                        </div>
                    ` : ''
                }
                <div class="event-name">
                    ${element.name}
                </div>
            </div>
        `;

        const authorInformations = document.createElement('div');
        authorInformations.classList.add('author-information');

        const authors = await FetchContent('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/users.json','json');
        const communities = await FetchContent('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/database/communities.json','json');
        await GetAuthors(authors,communities);
        async function GetAuthors(authors,communities) {
            CreateAuthors(element, authors, authorInformations,"Managed by");
            CreateWorks(element,communities,authorInformations,"Hosted at");
        }

        eventHeader.appendChild(authorInformations);

        const eventImage = document.createElement('div');
        eventImage.classList.add('event-poster');
        eventImage.innerHTML = `
            <img src="${element.medias.poster}">
        `;


        const eventTop = document.createElement('div');
        eventTop.classList.add('event-top');
        eventTop.appendChild(eventHeader);
        eventTop.appendChild(eventImage);
        eventContainer.appendChild(eventTop);

        const eventDown = document.createElement('div');
        eventDown.classList.add('event-down');
        
        Object.keys(element.regions).forEach((d) => {
            const region = d.charAt(0).toUpperCase() + d.slice(1);
            const dateInformationsDiv = document.createElement("div");
            dateInformationsDiv.classList.add("date-informations");
            const regionNameDiv1 = document.createElement("div");
            regionNameDiv1.classList.add("region-name");
            regionNameDiv1.textContent = region;



            const nameDiv = document.createElement("div");
            nameDiv.classList.add("time");
            nameDiv.textContent = formatTime(element.regions[d].date);
            dateInformationsDiv.appendChild(regionNameDiv1);

            dateInformationsDiv.appendChild(nameDiv);

            getUserLocation(function(data) {
                const countryCode = data.countryCode;
    
                const regions = {
                    europe: {
                        name: 'Europe',
                        codes: ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'],
                    },
                    asia: {
                        name: 'Asia',
                        codes: ['JP', 'CN', 'IN', 'KR', 'TH', 'SG', 'MY', 'ID', 'PH', 'VN', 'TW'],
                    },
                    americas: {
                        name: 'America',
                        codes: ['US', 'CA', 'MX', 'BR', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'BO', 'UY', 'PY', 'GY', 'SR', 'GF', 'FK', 'TT', 'GD', 'BS', 'JM', 'HT', 'CU', 'DO', 'PR', 'NI', 'CR', 'PA', 'HN', 'SV', 'BZ', 'GT'],
                    },
                };
                const matchingRegion = Object.values(regions).find(region => region.codes.includes(countryCode));
                if (matchingRegion && matchingRegion.name == region) {
                    dateInformationsDiv.classList.add('region-for-user')
                    const regionNameDiv2 = document.createElement("div");
                    regionNameDiv2.classList.add("region-match");

                    const match = document.createElement("div");
                    match.classList.add("match");
                    
                    match.innerHTML= `
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>
                        <span>For you</span>
                    `;

                    regionNameDiv2.appendChild(match)
                    dateInformationsDiv.appendChild(regionNameDiv2);

                }
            })


            eventDown.appendChild(dateInformationsDiv);





            
        });


        eventContainer.appendChild(eventDown);


        container.appendChild(eventContainer);
    });
}

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleString();
}
function getUserLocation(callback) {
    $.getJSON('http://ip-api.com/json')
    .done(function(location) {
        callback(location);
    })
    .fail(function() {
        console.error("Failed to retrieve geolocation data.");
        callback(null);
    });
}

