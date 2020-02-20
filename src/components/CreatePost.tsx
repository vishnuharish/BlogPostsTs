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
    onCancel: () => void
}
export const CreatePost: React.FC<Props> = (props: Props) => {
  const initialValues: MyFormValues = { 
      title: props.initialValues.title || '', 
      description: props.initialValues.description || '', 
      body:  props.initialValues.body||'' };
  return (
    <div className="col-md-4 mx-auto">
      <div className="border-1">
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
          <Form >
            <Field
              name="title"
              render={({field, form, meta}: FieldProps) => (
                <div className="form-group row">
                  <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                  <div className="col-sm-6">
                      <input className="form-control" id="title" type="text" {...field} placeholder="title" />
                  </div>
                  {meta.touched && meta.error && meta.error}
                </div>
                
              )}
            />
            <Field
              name="description"
              render={({field, form, meta}: FieldProps) => (
                <div className="form-group row">
                  <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                  <div className="col-sm-6">
                    <textarea className="form-control"{...field} id="description" placeholder="description" />
                  </div>
                  {meta.touched && meta.error && meta.error}
                </div>
                
              )}
            />
            <Field
              name="body"
              render={({field, form, meta}: FieldProps) => (
                <div className="form-group row">
                  <label htmlFor="body" className="col-sm-2 col-form-label">Body</label>
                  <div className="col-sm-6">
                    <textarea className="form-control"{...field} id="body" placeholder="body" />
                  </div>
                  {meta.touched && meta.error && meta.error}
                </div>
                
              )}
            />
          <div className="row">
            <div className="mx-auto">
              <button className="btn btn-sm btn-outline-primary" type="submit">submit</button>
              &nbsp; &nbsp;<button className="btn btn-sm btn-outline-danger" onClick={() => props.onCancel()}>Cancel</button>
            </div>
          </div>  
          </Form>
        )}
      />
    </div>
    </div>
  );
};