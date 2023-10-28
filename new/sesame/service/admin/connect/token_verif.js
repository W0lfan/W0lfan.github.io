export async function TokenVerification(token,name) {
    if (!name) name = "null";
    const apiUrl = `https://api.github.com/repos/W0lfan/SesameAPI/collaborators/${name}/permission`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `token ${token}`,
            },
        });
        if (response.status === 200) {
            const permissionLevel = response.data.permission;
            if (permissionLevel === "write" || permissionLevel === "admin") {
                return true;
            }
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}