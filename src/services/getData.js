const { Firestore } = require('@google-cloud/firestore');
 
async function getData() {
    const db = new Firestore();
    const querySnapshot = await db.collection('predictions').get();
    const user = querySnapshot.docs.map(doc => doc.data());
    return user;
}
 
module.exports = getData;