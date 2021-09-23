import FormEmail from 'components/FormEmail';
import React from 'react'

export default function Content() {
    return (
      <div className="content">
        <h1 className="content__hero-text text-dark-red">
          <span className="text-desaturated-red">We're</span> coming soon
        </h1>
        <p className="content__hero-description text-desaturated-red">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        <FormEmail />
      </div>
    );
}
