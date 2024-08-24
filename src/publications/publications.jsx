import "./publications.css";
import Navbar from "../navbar/navbar.jsx";
import React, { useState, useEffect } from 'react';

export default function Publications() {

const publications = [
    {
      title: 'A Review on Automated Detection of Acute Myeloid Leukemia',
      url: 'https://ieeexplore.ieee.org/document/10576117/',
      date: '2024',
      publisher: 'Aswathy Elma Aby,Salaji S,Anilkumar K K',
    },
    {
      title: 'Review of Totem-Pole Boost Bridgeless PFC Rectifier Intended for On-Board EV Charging',
      url: 'https://ieeexplore.ieee.org/document/10576074/',
      date: '2024',
      publisher: 'Leo Benn Dominic,Basil Saju,Midhun Raj M,Jones Mathew Cleetus,Anjali Varghese,Chikku Abraham',
    },
    {
      title: 'Stacked LSTM for Solar Irradiance Forecasting Using Minimum Redundancy Maximum Relevance (MRMR) Feature Selection',
      url: 'https://ieeexplore.ieee.org/document/10576087/',
      date: '2024',
      publisher: 'Ninu G Hari,Jisha G',
    },
    {
        title: 'ANN Technique for Load Forecasting',
        url: 'https://ieeexplore.ieee.org/document/10576077/',
        date: '2024',
        publisher: 'Vipin Krishna R,Suresh K Damodaran,Sagna L T',
      },
      {
        title: 'Artificial Steering Feel in Steer by Wire systems: A Simulation Based Evaluation of Control Strategies',
        url: 'https://ieeexplore.ieee.org/document/10576053/',
        date: '2024',
        publisher: 'Able Alex,Abdul Saleem',
      },
      {
        title: 'Document Digitization Using Optical Character Recognition - A Case Study of Mark Entry Automation in Educational Institutions',
        url: 'https://ieeexplore.ieee.org/document/10576116/',
        date: '2024',
        publisher: 'Ajay T Shaju,Justin Thomas Jo,Emil Saj Abraham,K G Vishnuprasad,V Deepa,Jabin Mathew'
      },
      {
        title: 'Revolutionizing Road Damage Assessment with YOLOv8-based Deep Learning and Computer Vision Techniques',
        url: 'https://ieeexplore.ieee.org/document/10576192/',
        date: '2024',
        publisher: 'Ashly Elizebath Joseph,Dua Ashraf,Richa Ann Abraham,Thushar Thomas Thakadipurath,Neena Joseph',
      },
      {
        title: 'GUI Element Detection via YOLOV8: A Deep Learning Approach for Widget Identification',
        url: 'https://ieeexplore.ieee.org/document/10576164/',
        date: '2024',
        publisher: 'Suji Jose,Philip Samuel,Sumam Mary Idicula',
      },
      
  ];

    return (
        <>
        <Navbar/>
      <div className="publications-main">
        <h1>Publications</h1>
        <div className="publications">
        {publications.map((pub, index) => (
          <div key={index}>
            <h2>
              <a href={pub.url} target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>
            </h2>
            <p>{pub.date}</p>
            <p>Published by: {pub.publisher}</p>
          </div>
        ))}
      </div>
      <p><a href="https://ieeexplore.ieee.org/xpl/conhome/10576062/proceeding">[Read more]</a></p>
      </div>
      </>
    );
  }