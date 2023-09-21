let company = {
    name : "Sesame",
    src : {
        website : "https://w0lfan.github.io/sesame"
    },
    datas : [
        {
            name : "Ship",
            icon : "",
            description : "Format a Starblast ship",
            form : [
                {
                    name : "Author",
                    description : "Author name - sensitive to special fonts",
                    need : true,
                    id:"users",
                    link_database : true,
                    same_result : false,
                    inner_code : [
                        "author"
                    ]
                },
                {
                    name : "Mod",
                    description : "Affiliated mod - leave blank if none",
                    need : false,
                    inner_code : [
                        "mod"
                    ]
                },
                {
                    name : "Description",
                    description : "Brief description of the ship",
                    need : false,
                    inner_code : [
                        "desc"
                    ]
                },
                {
                    name : "Image",
                    description : "Link to a ship image",
                    need : false,
                    isLink : true,
                    inner_code : [
                        "img"
                    ]
                },
                {
                    name : "Code",
                    description : "The code will automatically be formated",
                    id : "ship",
                    need : true,
                    inner_code : [
                        "code"
                    ]
                }
            ]
        },
        {
            name : "User",
            icon : "",
            description : "Format a Starblast user",
            form : [
                {
                    name : "Name",
                    description : "User name",
                    need : true,
                    id:"users",
                    link_database : true,
                    same_result : false,
                    inner_code : [
                        "name"
                    ]
                },
                {
                    name : "Starblast Status",
                    type : "check",
                    need : true,
                    checks : [
                        {
                            name : "Official Staff"
                        }, {
                            name : "Official Modder"
                        }, {
                            name : "Unique Commander Pass User"
                        }, {
                            name : "Official Contributor"
                        }, {
                            name : "Sesame Moderation Team"
                        }
                    ],
                    inner_code : [
                        "about",
                        "isStaff",
                        "isModder",
                        "isUCP",
                        "isContrib",
                        "isSesame"
                    ]
                },
                {
                    name : "Description",
                    description : "Brief description of the user",
                    need : false,
                    inner_code : [
                        "description"
                    ]
                },
                
                {
                    name : "Profile Picture",
                    description : "No cdn.discorapp.com links",
                    need : false,
                    inner_code : [
                        "pfp"
                    ]
                },
                {
                    name : "Youtube",
                    description : "Enter a Youtube Link",
                    need : false,
                    id : "links",
                    codeType : "object",
                    isLink : true,
                    inner_code : [
                        "links",
                        "id",
                        "src"
                    ]
                },
                {
                    name : "Discord",
                    description : "Enter a Discord name",
                    need : false,
                    id : "links",
                    codeType : "object",
                    inner_code : [
                        "links",
                        "id",
                        "src"
                    ]

                },
                {
                    name : "Github",
                    description : "Enter a Github Link",
                    need : false,
                    isLink : true,
                    id : "links",
                    codeType : "object",
                    inner_code : [
                        "links",
                        "id",
                        "src"
                    ]
                },
                {
                    name : "Spotify",
                    description : "Enter a Spotify Link",
                    need : false,
                    id : "links",
                    isLink : true,
                    codeType : "object",
                    inner_code : [
                        "links",
                        "id",
                        "src"
                    ]
                },
                {
                    name : "Reddit",
                    description : "Enter a Reddit Link",
                    need : false,
                    id : "links",
                    isLink : true,
                    codeType : "object",
                    inner_code : [
                        "links",
                        "id",
                        "src"
                    ]
                },
            ]
        }
    ]
}
