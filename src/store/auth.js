import firebase from "firebase/app"
export default {
    actions: {
        // eslint-disable-next-line 
        async login({dispatch, commit},{email, password}) {
             // eslint-disable-next-line
            try {
                await firebase.auth().signInWithEmailAndPassword(email,password)
            } catch (error) {
                commit('setError', error)
                throw error
            }

        },
        async register({dispatch, commit}, {email,password,name}) {
            // eslint-disable-next-line
            try {
                await firebase.auth().createUserWithEmailAndPassword(email,password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 10000,
                    name: name
                })
            } catch (error) {
                commit('setError', error)
                throw error
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout() {
            await firebase.auth().signOut()
        }
    }
}