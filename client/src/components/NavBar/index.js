import { MainDiv, NavText } from "./NavBar.styles"

const NavBar = () =>
{
    return(
        <MainDiv>
            <div style={{display: 'flex'}}>
                <NavText>Menu</NavText>
                <div style={{display: 'flex', alignItems: 'center', marginLeft: '5vw'}}>
                    <div style={{borderRadius : '50%', backgroundColor: 'red', width: '20px', height: '20px', margin: '0 5px'}}/>
                    <NavText>User name</NavText>
                </div>
            </div>
            <NavText>Sales Report</NavText>
        </MainDiv>
    )
}
export default NavBar;