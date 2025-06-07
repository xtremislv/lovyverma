
// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: 'Sumit Healthtech Pvt. Ltd.',
      title: 'AI/ML Intern',
      logo: 'Hospital',
      start: 'May, 2024',
      end: 'July, 2024'
    },
    {
      company: 'IIT Bhilai',
      title: 'Research intern',
      logo: 'Lab',
      start: 'Aug, 2023',
      end: 'April, 2024'
    },
  ]