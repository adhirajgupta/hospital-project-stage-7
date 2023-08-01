import React, { Component } from 'react';
import { DataTable, Button, Text, Portal, Dialog, Paragraph } from 'react-native-paper';
import { Alert, ScrollView } from 'react-native';

const optionsPerPage = [2, 3, 4];


export default class TableEnt extends Component {
    constructor() {
        super()
        this.state = {
            page: 0,
            itemsPerPage: optionsPerPage[0],

            count: 0,
            disabled: false,
            data: []
        }
    }


    cal = (x) => {

        const today = new Date()
        let tomorrow = new Date()
        tomorrow.setDate(today.getDate() + x)
        let newDate = tomorrow.toString().split(' ')
        return {
            shortDate: newDate[1] + " " + newDate[2],

        }
    }


    renderCell = (x, day) => {
        {/* Monday Row */ }
        let shortDates = {
            monday: this.cal(1 + x).shortDate,
            tuesday: this.cal(2 + x).shortDate,
            wednesday: this.cal(3 + x).shortDate,
            thursday: this.cal(4 + x).shortDate,
            friday: this.cal(5 + x).shortDate,
            saturday: this.cal(6 + x).shortDate,
            sunday: this.cal(7 + x).shortDate,
        }

        return <>
            <ScrollView horizontal contentContainerStyle={{}}>
                <DataTable.Row>
                    <DataTable.Cell style={{ borderColor: 'black', borderRightWidth: 1, width: 70 }}>
                        <Text style={{ textAlign: 'center' }}>{shortDates[day]}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{ width: 130 }}>
                        <Button disabled={false} mode="outlined" style={{ backgroundColor:'white' }}
                            onPress={() => {
                               
                            }}>
                            <Text>4:30 - 5:00</Text>
                        </Button>
                    </DataTable.Cell>
                    <DataTable.Cell style={{ width: 130 }}>
                        <Button disabled={false} mode="outlined" style={{ backgroundColor:'white' }}
                            onPress={() => {
                               
                            }}>
                            <Text>5:00 - 5:30</Text>
                        </Button>
                    </DataTable.Cell>
                    <DataTable.Cell style={{ width: 130 }}>
                        <Button disabled={false} mode="outlined" style={{ backgroundColor:'white' }}
                            onPress={() => {
                               
                            }}>
                            <Text>5:00 - 5:30</Text>
                        </Button>
                    </DataTable.Cell>
                </DataTable.Row>
            </ScrollView>
        </>
    }


    renderTable = (x) => {
        return <>
            {this.renderCell(x, "monday")}
            {this.renderCell(x, "tuesday")}
            {this.renderCell(x, "wednesday")}
            {this.renderCell(x, "thursday")}
            {this.renderCell(x, "friday")}
            {this.renderCell(x, "saturday")}
            {this.renderCell(x, "sunday")}
        </>
    }


    render() {
        return (
            <DataTable>
                <DataTable.Header style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}>
                    <DataTable.Title style={{ width: 20 }}>Day</DataTable.Title>
                    <DataTable.Title style={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>Timings</DataTable.Title>
                </DataTable.Header>

                {
                    this.state.page === 0 && (
                        this.renderTable(0)
                    )
                }
                {
                    this.state.page === 1 && (
                        this.renderTable(7)
                    )
                }
                {
                    this.state.page === 2 && (
                        this.renderTable(14)
                    )
                }
                {
                    this.state.page === 3 && (
                        this.renderTable(21)
                    )
                }

                <DataTable.Pagination
                    label={`${this.state.page}/3`}
                    page={this.state.page}
                    numberOfPages={4}
                    onPageChange={(page) => this.setState({ page: page })}
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={this.state.itemsPerPage}
                    // setItemsPerPage={this.setState({ itemsPerPage: setItemsPerPage })}
                    optionsLabel={'Rows per page'}
                    showFastPaginationControls
                />
            </DataTable>
        )
    }
}