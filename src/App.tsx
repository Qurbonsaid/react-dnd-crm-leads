import {Section, SectionCard} from "./section";
import {useState} from "react";
import {Box} from "@mui/material";
import {Lead} from "./lead.tsx";

export const App = () => {
  const sections: Section[] = [
    {_id: '1', title: 'Elementary'},
    {_id: '2', title: 'Math'},
    {_id: '3', title: 'IELTS'},
  ];
  const [leads, setLeads] = useState<Lead[]>([
    {
      _id: '1',
      section: '1',
      fullName: 'John Doe',
      phoneNumber: '+998770001122',
      createdAt: '2024-12-14'
    },
    {
      _id: '2',
      section: '1',
      fullName: 'John Cena',
      phoneNumber: '+998770001133',
      createdAt: '2024-12-15'
    },
    {
      _id: '3',
      section: '1',
      fullName: 'Jane Doe',
      phoneNumber: '+998770001144',
      createdAt: '2024-12-16'
    },
    {
      _id: '4',
      section: '2',
      fullName: 'John Conor',
      phoneNumber: '+998770001155',
      createdAt: '2024-12-17'
    },
    {
      _id: '5',
      section: '2',
      fullName: 'John Wick',
      phoneNumber: '+998770001166',
      createdAt: '2024-12-18'
    },
    {
      _id: '6',
      section: '3',
      fullName: 'John Smith',
      phoneNumber: '+998770001177',
      createdAt: '2024-12-19'
    },
  ]);
  return (
    <Box sx={{display: 'flex'}}>
      {sections.map(section => <SectionCard leads={leads} setLeads={setLeads} section={section} key={section._id}/>)}
    </Box>
  );
}
