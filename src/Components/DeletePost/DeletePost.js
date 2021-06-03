import React, { useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Avatar from '@material-ui/core/Avatar';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#6f9edd",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

const DeletePost = () => {
    const classes = useStyles();
    const [allPost] = useContext(UserContext);

    const deleteUser = (id) => {
        fetch(`https://my-json-server.typicode.com/tania-developer/post-maker/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div style={{margin:"30px"}}>
            <h2>Manage Products</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>User Profile</StyledTableCell>
                            <StyledTableCell>User Name</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allPost.map((pd) => (
                            <StyledTableRow key={pd.id}>
                                <StyledTableCell component="th" scope="row">
                                    <Avatar alt="Remy Sharp" src={pd.authorAvatar}/>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {pd.author}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Link to={"/update/"+pd.id}><button> <FontAwesomeIcon icon={faPen} /></button></Link> <button onClick={()=>deleteUser(pd.id)}><FontAwesomeIcon icon={faTrashAlt} /></button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DeletePost;