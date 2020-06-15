import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
          <Table
                tableHeaderColor="warning"
                tableHead={["Class Period", "Name", "Contact", "Guardian"]}
                tableData={[
                  ["1", "Carol Adams", "(603) 6542-986", "Frank"],
                  ["1", "Minerva Hooper", "(603) 6542-986", "Linda"],
                  ["1", "Sage Rodriguez", "(603) 6542-986", "Angie"],
                  ["1", "Philip Chaney", "(603) 6542-986", "Nick"],
                  ["2", "Dakota Rice", "(603) 6542-986", "Antonio"],
                  ["2", "Karen Graves", "(603) 6542-986", "Allesandra"],
                  ["2", "Breonna Brown", "(603) 6542-986", "Camden"],
                  ["2", "Anthony Cooper", "(603) 6542-986", "Mathilda"],
                  ["3", "Amy Silverston", "(603) 6542-986", "George"],
                  ["3", "Bradley ", "(603) 6542-986", "Robert"],
                  ["3", "Sage Rodriguez", "(603) 6542-986", "Mike"],
                  ["3", "Philip Chaney", "(603) 6542-986", "Daniel"]
                ]}
              />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
