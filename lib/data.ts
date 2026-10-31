export type Status = 'Pendente' | 'Em andamento' | 'Concluída';
export type Priority = 'Alta' | 'Média' | 'Baixa';
export type Task = { id: number; title: string; project: string; status: Status; priority: Priority; due: string; owner: string };
export const initialTasks: Task[] = [
  {id:1,title:'Criar layout da página inicial',project:'Website Institucional',status:'Concluída',priority:'Alta',due:'2026-11-03',owner:'Ana Silva'},
  {id:2,title:'Implementar autenticação visual',project:'TaskFlow',status:'Em andamento',priority:'Alta',due:'2026-11-05',owner:'João Costa'},
  {id:3,title:'Revisar componentes do dashboard',project:'TaskFlow',status:'Em andamento',priority:'Média',due:'2026-11-07',owner:'Marina Lima'},
  {id:4,title:'Organizar documentação',project:'Portal Acadêmico',status:'Pendente',priority:'Baixa',due:'2026-11-10',owner:'Pedro Alves'},
  {id:5,title:'Testar navegação entre páginas',project:'Portal Acadêmico',status:'Pendente',priority:'Alta',due:'2026-11-02',owner:'Ana Silva'},
  {id:6,title:'Preparar apresentação',project:'TaskFlow',status:'Concluída',priority:'Média',due:'2026-11-01',owner:'Marina Lima'},
  {id:7,title:'Ajustar layout responsivo',project:'Website Institucional',status:'Pendente',priority:'Média',due:'2026-11-12',owner:'João Costa'},
  {id:8,title:'Validar formulário de login',project:'TaskFlow',status:'Concluída',priority:'Alta',due:'2026-11-04',owner:'Pedro Alves'}
];
export const STORAGE_TASKS='taskflow_tasks_v1';
export const STORAGE_SESSION='taskflow_session_v1';
export function loadTasks():Task[] {try { const data=localStorage.getItem(STORAGE_TASKS); if(data){const parsed=JSON.parse(data); if(Array.isArray(parsed))return parsed;} }catch{} return initialTasks;}
export function saveTasks(items:Task[]){localStorage.setItem(STORAGE_TASKS,JSON.stringify(items));}
