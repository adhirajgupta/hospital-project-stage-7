import * as React from 'react';
import { List, } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { tpaList, otherCompanyList, insuranceCompanyList } from './dataSet';

const ListComponent = () => {
    const [data, setData] = React.useState({
        tpaList:tpaList,
        otherCompanyList:otherCompanyList,
        insuranceCompanyList:insuranceCompanyList
    });


    return (
        /*
        <ScrollView showsVerticalScrollIndicator>
            <List.Section title="Accordions">
                <List.Accordion
                    title="TPA EMPANELMENT"
                    left={props => <List.Icon {...props} icon="folder" />}
                >
                    {
                        tpaList.map((element, index) => (
                            // console.log(element),
                            <ScrollView horizontal>
                                <List.Item title={element} key={index} titleStyle={{ textAlign: 'left',marginRight:150 }} />
                            </ScrollView>
                        ))
                        // <List.Item title="First item" />
                        // <List.Item title="Second item" />
                    }
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First items" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>
        </ScrollView>
     */
            <ScrollView>
            {
                data.tpaList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: 150 }} style={{borderBottomColor:'black',borderBottomWidth:1}}/>
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
            {
                data.otherCompanyList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: 150 }} style={{borderBottomColor:'black',borderBottomWidth:1}}/>
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
            {
                data.insuranceCompanyList.map((element, index) => (
                    // console.log(element),
                    <ScrollView horizontal>
                        <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: 150 }} style={{borderBottomColor:'black',borderBottomWidth:1}}/>
                    </ScrollView>
                ))
                // <List.Item title="First item" />
                // <List.Item title="Second item" />
            }
        </ScrollView>

        
     
    );
};

export default ListComponent;