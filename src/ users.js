import {
    List, 
    Datagrid, 
    TextField, 
    EmailField,
    Edit,
    Create,
    SimpleForm,
    EditButton ,
    TextInput
} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit title="Edit" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);