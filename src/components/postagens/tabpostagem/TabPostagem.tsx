import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1') //inicializou com valor 1 para exibir as postagem (o valor é obrigatório)
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue); 
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='boxTeste2'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className='titulo2' label="Todas as postagens" value="1"/>
            <Tab className='titulo2' label="About me" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo2">About me</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Sou formada em turismo e estou em transição de carreira, a minha vida profissional iniciou trabalho voluntário em eventos de cultura japonesa e de jogos, depois fui trabalhar com serviço de atendimento ao cliente e ao consumidor, estagiei em um hotel e a última experiência foi como orientadora de público em um museu, com essas experiências consegui construir habilidades de comunicação, trabalho em equipe, paciência e responsabilidade. Meu interesse na tecnologia teve início na infância  e o curso da gen me trouxe habilidades técnicas e comportamentais para me desenvolver na área tecnológica.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;