import { Container, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { SelectColorTheme } from "../../components/SelectColorTheme";
//import { Navbar } from "../components/Navbar";


export const UserLayout = ({ children }) => {
  //const {user}=useSelector(state=> state.auth);
  // console.log('on NavBar component')
  return (

    <Box >
      <Navbar />
      <Toolbar />

      
      



      {/* Children */}
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          display: 'block',
          width: '100%',
          p: 0
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
