import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params:{
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks:{
        async signIn ({ profile }) {
            // connect to the database
            // check if user exist
            // create user if not exist
            // return true to allow sign in
        },
        async session ({ session }) {
            // get user from database
            // assign user id from the session
            // return session
        }


    }
}