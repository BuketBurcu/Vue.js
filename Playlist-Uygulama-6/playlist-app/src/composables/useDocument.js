import {ref} from "vue";
import { projectFileStore } from "@/firebase/config";
import { collection } from "firebase/firestore";

const useDocument=(collection,id)=>{
    const error=ref(null);
    const isPending=ref(false);

    let docRef= projectFileStore.collection(collection).doc(id);

    const deleteDoc=async()=>{
        isPending.value=true;
        error.value=null;

        try{
            const res=await docRef.delete();
            isPending.value=false;
            return res;
        }
        catch(err){
            console.log(err.message);
            isPending.value=false;
            error.value="could not delete the document";
        }
        return {error, isPending, deleteDoc}
    };
};

const updateDoc=async(updates)=>{
    isPending.value=true;
    error.value=null;

    try{
        const res=await docRef.update(updates);
        isPending.value=false;
        return res;
    }
    catch(err){
        console.log(err.message);
        isPending.value=false;
        error.value="could not delete the document";
    }
    return {error, isPending, deleteDoc ,updateDoc}
};

export default useDocument;
