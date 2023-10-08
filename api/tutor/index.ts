import { db } from '@/config/firebase'
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  orderBy,
  updateDoc,
  limit,
  startAfter,
  deleteDoc,
  QueryDocumentSnapshot,
  Query,
  DocumentData,
  collectionGroup,
  or,
} from 'firebase/firestore'

/** Fetch Tutor by id with reviews Collection */

/**
 * @param tutorId
 * @returns
 */

export const fetchTutor = async (tutorId: string) => {
  const tutorDocRef = doc(db, 'tutors', tutorId)
  const tutorDoc = await getDoc(tutorDocRef)

  if (tutorDoc.exists()) {
    const reviewsQuery = query(collection(db, `tutors/${tutorId}/reviews`));
    const reviewsSnapshot = await getDocs(reviewsQuery);
    const reviewsData = reviewsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    const data = { id: tutorDoc.id, ...tutorDoc.data(), reviews: reviewsData }
    return data
  }
};

/** Fetch Tutor by id with Subjects Collection */

/**
 * @param tutorId
 * @returns
 */

export const fetchSubject = async (tutorId: string) => {
  const tutorDocRef = doc(db, 'tutors', tutorId)
  const tutorDoc = await getDoc(tutorDocRef)

  if (tutorDoc.exists()) {
    const subjectQuery = query(collection(db, `tutors/${tutorId}/subjects`));
    const subjectSnapshot = await getDocs(subjectQuery);
    const subjectdata = subjectSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    return subjectdata
           
  }
};

/** All tutors */

/**
 * @param filter
 * @returns
 */

export const fetchAllTutors = async (filter: any) => {
  
  let tutorData: any = []

  const { filterSubject, selectedQualification, sort } = filter || {};
  
  let tutorsQuery: any = collection(db, 'tutors');

  if (filterSubject || selectedQualification.length > 0) {
    tutorsQuery = collectionGroup(db, 'subjects');
    tutorsQuery = query(
      tutorsQuery,
      or(
        where('Subject', '==', filterSubject),
        where('Qualification', 'array-contains', selectedQualification)
      )
    )
    const tutorsSnapshot = await getDocs(tutorsQuery);
    const parentsPromises:any = [];
    tutorsSnapshot.forEach((doc) => {
      const docRef = doc.ref;
      const parentCollectionRef = docRef.parent; // CollectionReference
      const immediateParentDocumentRef:any = parentCollectionRef.parent; // DocumentReference
      parentsPromises.push(getDoc(immediateParentDocumentRef));
    })
   
   let result:any = await Promise.all(parentsPromises)
   console.log({ result })
   return result.length > 0 ? result.map((tut:any)=> { return { ...tut.data() }}) : [] ;
  }

  if (sort) {
    tutorsQuery = collection(db, 'tutors');
    tutorsQuery = query(tutorsQuery, orderBy('price', sort));
  }

  const tutorsSnapshot = await getDocs(tutorsQuery)

  tutorData = tutorsSnapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
  }))
  return tutorData;
}



/** All  tutor subjects  */

/**
 * @param tutorId
 * @returns
 */

export const fetchTutorSubjects = async (tutorId: string) => {
  const tutorSubRef = query(
    collection(db, 'subjects'),
    where('tutorId', '==', tutorId)
  )
  const tutorSnapshot = await getDocs(tutorSubRef);
  const subArr: any = [];
  tutorSnapshot.forEach((doc) => {
    subArr.push({ id: doc.id, ...doc.data() });
  })
  return subArr;
}

/** Subjects */

export const fetchAllSubjects = async () => {
  const tutorSubRef = query(collection(db, 'subjects'));
  const tutorSnapshot = await getDocs(tutorSubRef);
  const subArr: any = [];
  tutorSnapshot.forEach((doc) => {
    subArr.push({ id: doc.id, ...doc.data() });
  })
  return subArr
}

/** Tutor Qualifiction */

/**
 * @param tutorId
 * @returns
 */

export const fetchTutorQulification = async (tutorId: string) => {
  const tutorQulification = query(
    collection(db, 'qualifications'),
    where('tutorId', '==', tutorId)
  );
  const tutorSnapshot = await getDocs(tutorQulification);
  const qulifArr: any = [];
  tutorSnapshot.forEach((doc) => {
    qulifArr.push({ id: doc.id, ...doc.data() });
  });
  return qulifArr;
};

/** Send Qualification Request */

/**
 * @param data
 * @returns
 */

export const AddTutorQualification = async (data: any) => {
  const qualificationRef = collection(db, 'qualifications');
  try {
    const resBack = await addDoc(qualificationRef, data);
    console.log('New message document added with ID: ', resBack.id);
    return resBack;
  } catch (error) {
    console.error('Error adding message document: ', error);
    throw error;
  }
};

/** possible Subjects */

/**
 * @returns
 */
export const possibleSubjects = async () => {
  const possiblesubjectsRef = query(collection(db, 'possiblesubjects'));
  const posSubjectsSnapshot = await getDocs(possiblesubjectsRef);
  const subArr: any = [];
  posSubjectsSnapshot.forEach((doc) => {
    subArr.push({ id: doc.id, ...doc.data() });
  });
  return subArr;
};

/** Fetch Lessons */

/**
 *
 * @param tutorId
 * @returns
 */

export const fetchLessons = async (tutorId: string) => {
  const lessonsRef = query(
    collection(db, 'lessons'),
    where('tutorID', '==', tutorId)
  );
  const lessonsSnapshot = await getDocs(lessonsRef);
  const subArr: any = [];
  lessonsSnapshot.forEach((doc) => {
    subArr.push({ id: doc.id, ...doc.data() });
  });
  return subArr;
};

/** Fetch Lessons history */

/**
 * @param tutor id
 */

export const fetchLessonsHistory = async (tutorId: string) => {
  const lessonshistoryRef = query(
    collection(db, 'lessonshistory'),
    where('tutorID', '==', tutorId)
  );
  const lessonsSnapshot = await getDocs(lessonshistoryRef);
  const subArr: any = [];
  lessonsSnapshot.forEach((doc) => {
    subArr.push({ id: doc.id, ...doc.data() });
  });
  return subArr;
};

/** book lesson send Request */

/**
 * @param data
 * @returns
 */

export const hireTutor = async (data: any) => {
  const lessonsRef = collection(db, 'lessons');
  try {
    const resBack = await addDoc(lessonsRef, data);
    console.log('New message document added with ID: ', resBack.id);
    return resBack;
  } catch (error) {
    console.error('Error adding message document: ', error);
    throw error;
  }
};

/** Send Message To Match Tutor */

/**
 * @param data
 * @returns
 */

export const tutorMatchSendMessage = async (data: object): Promise<any> => {
  const tutorMatchCollectionRef = collection(db, 'tutormatch');
  try {
    const newDocRef = await addDoc(tutorMatchCollectionRef, data);
    return newDocRef;
  } catch (error) {
    console.error('Error adding message document: ', error);
    throw error;
  }
};

/** Contact Tutor  */

/**
 * @param tutorId
 * @param data
 * @returns
 */

export const ContatctTutor = async (
  tutorId: string,
  data: any
): Promise<any> => {
  const tutorRef = doc(db, 'tutors', tutorId);
  // get a reference to the messages subcollection
  const messagesRef = collection(tutorRef, 'messages');
  // add the new message document to the messages subcollection
  try {
    const docRef = await addDoc(messagesRef, data);
    console.log('New message document added with ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.error('Error adding message document: ', error);
    throw error;
  }
};

/** Post new Offered Subjects */
/**
 *
 * @param tutorId
 * @param subjectData
 */
export const addNewSubjectToTutor = async (tutorId: any, subjectData: any) => {
    const tutorRef = doc(db, 'tutors', tutorId);
    const SubjectsRef:any = collection(tutorRef, 'subjects');
    try {
    const docRef = await addDoc(SubjectsRef, subjectData);
    console.log('New Subject document added with ID: ', docRef.id);
    return docRef;
  } catch (error) {
    console.error('Error adding Subject document: ', error);
    throw error;
  }
};

/********************     Dashboard Apis      ****************/

/********* Message Requests    ********/

/**
 * @param tutorId
 * @param page
 * @param pageSize
 * @returns
 */
let lastDocumentSnapshot: QueryDocumentSnapshot | null = null;
export const MessageRequests = async (
  tutorId: string,
  page: number = 1,
  pageSize: number = 10
) => {
  const tutorRef = doc(db, 'tutors', tutorId);
  const messagesRef = collection(tutorRef, 'messages');

  let messageQuery: Query<DocumentData> = query(
    messagesRef,
    orderBy('timestamp'),
    limit(pageSize)
  );

  if (page > 1 && lastDocumentSnapshot) {
    messageQuery = query(messageQuery, startAfter(lastDocumentSnapshot));
  }
  const messagesSnapshot = await getDocs(messageQuery);

  if (!messagesSnapshot.empty) {
    lastDocumentSnapshot =
      messagesSnapshot.docs[messagesSnapshot.docs.length - 1];
  } else {
    lastDocumentSnapshot = null;
  }
  const messages = messagesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const totalSnapshot = await getDocs(messagesRef);
  const totalRecords = totalSnapshot.size;
  const totalPages = Math.ceil(totalRecords / pageSize);
  return { messages, totalPages };
};

/******** Delete message ************/

/**
 * @param tutorId
 * @param messageId
 */

export const deleteMessage = async (tutorId: string, messageId: string) => {
  const messageRef = doc(db, 'tutors', tutorId, 'messages', messageId);
  await deleteDoc(messageRef);
};

/*** Show 10 booked lessons Students for tutor */

/**
 * @param tutorId
 * @returns
 */

export const showStudentRecord = async (tutorId: string) => {
  const lessonsHistoryRef = query(
    collection(db, 'lessons'),
    where('tutorID', '==', tutorId),
    orderBy('date', 'desc'),
    limit(10)
  );
  const lessonsSnapshot = await getDocs(lessonsHistoryRef);
  const subArr: any[] = [];

  for (const dec of lessonsSnapshot.docs) {
    const lessonData: any = { id: dec.id, ...dec.data() };

    // Get the student document using the studentID reference
    const studentRef = doc(db, 'students', lessonData.studentID);
    const studentDoc = await getDoc(studentRef);

    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      const combinedData = { ...lessonData, student: studentData };
      subArr.push(combinedData);
    }
  }
  return subArr;
};