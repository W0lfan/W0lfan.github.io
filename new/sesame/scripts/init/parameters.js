const parameters = {
    localStorage : {
        name : "SesameParametersStorage",
        json : {
            theme : "dark",
            language : "EN",

        }
    },
    dataResultForm : {
        correctSort : {},
        suggestedSort : {}
    },


    adminSession : {
        name : "SesameLocalAdminSession"
    },

    loader : {
        states : {
            indexing : 'Indexing datas',
            database : function(dir) {
                return `Viewing ${dir}.json at database`
            }
        }
    }
};