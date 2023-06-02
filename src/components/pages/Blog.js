import React from 'react';
import Card from "../Card";


export default function Blog() {
  return (
      <div class="container text-center" style={{ minHeight: "100vh" }}>
        <div class="row align-items-start">
          <h2> Here are a few projects I have worked on!</h2>
          <div class="col">
            <Card
              name="Work Day Scheduler"
              description="A simple calender app for scheduling your work day"
              link="https://joseneyj.github.io/WorkDayScheduler5/"
            />
          </div>
          <div class="col">
            
            <Card
              name="Plants2Pot"
              description="E-commerce website that sells plants"
              link="https://morning-sands-53592.herokuapp.com"
            />
          </div>
          <div class="col">
            <Card
              name="Weather Dash Board"
              description="5 Day Weather Forecast"
              link="https://joseneyj.github.io/WeatherDash6/"
            />
          </div>
          <div class="col">
            <Card
              name="Note Taker"
              description="An application that allows you to keep tabs on your notes"
              link="https://fast-castle-16208.herokuapp.com"
            />
          </div>
          <div class="col">
            <Card
              name="Code Quiz"
              description="A mini quiz about coding!"
              link="https://joseneyj.github.io/Quiz4Challenge/"
            />
          </div>
          <div class="col">
            <Card
              name="Password Generator"
              description="Generates a random password"
              link="https://joseneyj.github.io/Java3Challenge/"
            />
          </div>
        </div>
      </div>
  );
}
