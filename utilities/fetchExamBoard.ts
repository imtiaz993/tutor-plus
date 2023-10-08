import { possibleSubjects } from '@/api/tutor'

export const ExamBoards = async(selectedSub:any) => {
    const arr = selectedSub.split('-')
    const subject = arr[0]
    const level = arr.slice(1).join('-')
   try{
       const allSubjects = await possibleSubjects() 
       const tutorSubject:any = allSubjects.find((s:{Subject:string}) => s.Subject === subject)
        return tutorSubject.Qualification[level]
   }catch(err){
       throw err
   }
}

// {
//   Qualification : {
//   A-Level:[ 'OCR' , 'AQA'],
//   GCSE: [ 'Edexcel', 'AQA' ]
//   },
//  Subject: 'English'
// }