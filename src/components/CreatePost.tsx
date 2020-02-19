import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface MyFormValues {
  _id?: string;
  title: string;
  description: string;
  body: string;
}
interface Props {
    initialValues: MyFormValues
    history: any
}
export const CreatePost: React.FC<Props> = (props: Props) => {
  const initialValues: MyFormValues = { 
      title: props.initialValues.title || '', 
      description: props.initialValues.description || '', 
      body:  props.initialValues.body||'' };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            if(props.initialValues._id){
                fetch(`http://localhost:5000/api/v1/posts/${props.initialValues._id}`, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }   
                }).then( res => res.json())
                .then( ({data}) => {
                    console.log(data);
                    props.history.push('/');
                })
            } else {
             fetch('http://localhost:5000/api/v1/posts/', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }   
            }).then( res => res.json())
            .then( data => {
                console.log(data)
                props.history.push('/')
            })
        }
            
          actions.setSubmitting(false);
        }}
        render={formikBag => (
          <Form>
            <Field
              name="title"
              render={({field, form, meta}: FieldProps) => (
                <div>
                  <input type="text" {...field} placeholder="title" />
                  {meta.touched && meta.error && meta.error}
                </div>
                
              )}
            />
            <Field
              name="description"
              render={({field, form, meta}: FieldProps) => (
                <div>
                  <textarea {...field} placeholder="description" />
                  {meta.touched && meta.error && meta.error}
                </div>
                
              )}
            />
            <Field
              name="body"
              render={({field, form, meta}: FieldProps) => (
                <div>
                  <textarea {...field} placeholder="body" />
                  {meta.touched && meta.error && meta.error}
                </div>
                
              )}
            />

            <button type="submit">submit</button>
          </Form>
        )}
      />
    </div>
  );
};