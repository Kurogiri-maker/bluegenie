import React , { useState,  useEffect }from "react";
import { ReactDOM } from "react";
import { Component, Fragment } from "react";
import { Helmet } from 'react-helmet';
import { BackDrop, BackDrop2, BoxContainer, HeaderContainer, HeaderText, InnerContainer, BottomContainer,OptionContainer, SmallText, TopContainer , Button1,Button2,Button3} from "./component";
import { Marginer } from "../marginer";
import axios from "axios";
import { useSearchParams  } from "react-router-dom";
import { Chunk } from "webpack";



export function ShowScore(props){
    
    const [searchParams,setSearchParams] = useSearchParams();
    const score = searchParams.get("Score");

    return <BoxContainer>
        <InnerContainer>
            <h1> Score is {score == 0 ? "0" : score} </h1>
            <Button1 onClick={
                 async () => {
                    // Prompt user to select any serial port.
                    const port = await navigator.serial.requestPort();

                    // Wait for the serial port to open.
                    await port.open({ baudRate: 9600 , dataBits: 8 });

                    const writableStream = new WritableStream({

                    });

                    const defaultWriter = writableStream.getWriter();

                    const encoder = new TextEncoder();
                    const encoded = encoder.encode("hello", { stream: true });

                    encoded.forEach((chunk)=> {
                        defaultWriter.ready
                        .then(() => defaultWriter.write(chunk))
                        .then(() => {
                          console.log("Chunk written to sink.");
                        })
                        .catch((err) => {
                          console.log("Chunk error:", err);
                        });

                        // Call ready again to ensure that all chunks are written
                        //   before closing the writer.
                        defaultWriter.ready
                        .then(() => {
                          defaultWriter.close();
                        })
                        .then(() => {
                          console.log("All chunks written");
                        })
                        .catch((err) => {
                          console.log("Stream error:", err);
                        });
                    })


                    // Allow the serial port to be closed later.
                    writer.releaseLock();

                    await port.close();
                  }
            }>Upload Code</Button1>
        </InnerContainer>
        </BoxContainer>
        
        ;

}








