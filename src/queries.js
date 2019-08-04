import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    query{
        Page(page:1){
            media(sort:TRENDING_DESC){
                id
                title{
                    english(stylised:true)
                    native(stylised:true)
                }
                description
                episodes
                genres
                coverImage{
                    large
                }
            }
        }
    }
`