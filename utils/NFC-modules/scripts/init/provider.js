export async function FetchContent(link, type) {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        if (type === "txt") {
            return response.text();
        } else if (type === "json") {
            return response.json();
        } else {
            throw new Error('Unsupported response type');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

export function AppendToHead(rel, type, href) {
    const link = document.createElement('link');
    link.rel = rel;
    link.type = type;
    link.href = href;
    document.head.appendChild(link)
}

export async function Initialize_ContentProvider() {
    try {
        const content = await FetchContent('/utils/NFC-modules/content/provider.txt', 'txt');
        await AppendToBody(content);
    } catch (error) {
        console.error('Error in Initialize_ContentProvider:', error);
    }

    async function AppendToBody(content) {
        if (content) {
            document.body.innerHTML += content;
        }
    }
}
