import React from 'react';
import { List, Datagrid, TextField, Create, TextInput, SimpleForm, LongTextInput, DateInput, NumberInput, ReferenceField } from 'admin-on-rest';

export const TransactionList = (props) => (
    <div>   
        <List {...props}>
            <Datagrid>
                <TextField label="Date: " source="date" />
                <TextField label="Amount:" source="amount" />
                <TextField label="Total Amount: " source="totalAmount" />
                <TextField label="Saved Amount: " source="savedAmount" />
                <TextField label="Left Amount: " source="leftAmount" />
                <TextField lable="Final Date: " source="finalDate" />
                <ReferenceField label="Account: " source="Account_id" reference="accounts">
                    <TextField source="number" />
                </ReferenceField>
            </Datagrid>
        </List>
        <br></br>
            <input type="button" onclick="history.back()" name="GoBack" value="GoBack"/>
    </div>
);

export const GoalCreate = (props) => (
    <Create {...props}>
        <SimpleForm>

            <TextInput label="Name: " source="name" />
            <LongTextInput label="Description: " source="description" />
            <NumberInput label="Goal Total: " source="totalAmount" />
            <DateInput label="Goal Date: " source="finalDate" />
            <NumberInput label="Account: " source="Account_id" />

        </SimpleForm>
    </Create>
);

