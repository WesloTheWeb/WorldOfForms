import React from 'react';
import classes from './Dashboard.module.css';
import FormSelect from '../../components/FormSelect/FormSelect';

const { dashboardContainer } = classes;

const Dashboard = (props) => {

    const availableForms = [
        {
            title: `Sign on (Generic)`,
            id: 0,
            description: 'Made with React-Hooks-Form'
        },
        {
            title: `Sign on (White)`,
            id: 1,
            description: 'Made with React-Hooks-Form'
        },
        {
            title: `Sign on (media)`,
            id: 2,
            description: 'Made with React-Hooks-Form'
        },
    ]

    return (
        <section className={dashboardContainer}>
            {
                availableForms.map((form, idx) => {
                    return (
                        <FormSelect title={form.title} id={idx} description={form.description} />
                    )
                })
            }
        </section>
    );
};


export default Dashboard;