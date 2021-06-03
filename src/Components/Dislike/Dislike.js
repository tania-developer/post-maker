import React, { useContext } from 'react';
import { DislikeContext } from '../../App';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Avatar from '@material-ui/core/Avatar';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const Dislike = () => {
    const classes = useStyles();
    const [dislikes] = useContext(DislikeContext);
    return (
        <div style={{margin:"30px"}}>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>User Profile</StyledTableCell>
                        <StyledTableCell>User Name</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dislikes.map((du) => (
                        <StyledTableRow key={du.id}>
                            <StyledTableCell component="th" scope="row">
                                <Avatar alt="Remy Sharp" src={du.authorAvatar}/>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {du.author}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
};

export default Dislike;