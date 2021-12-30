import { ref, watchEffect } from 'vue'

import { db } from '@/firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const getCollection = (colName, querySub) => {
    const documents = ref(null);
    let colRef = collection(db, colName);

    if (querySub) {
        colRef = query(colRef, where(...querySub));
    }

    const unsub = onSnapshot(colRef, snapshot => {
        let results = [];
        snapshot.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id });
        });
        documents.value = results;
    });

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub());
    })

    return { documents }
}

export default getCollection;