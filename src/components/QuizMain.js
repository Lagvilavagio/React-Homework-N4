import React, {Component, Fragment} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

    // local steiti
    state = {
        quiestions: {
            1: 'რამ შეჭამა ვენახი?',
            2: 'ხარი ______ რომ დააბა, ან ზნეს იცვლის, ან ______',
            3: 'ვინ არის ავტორი ფრაზისა: აქ მოდით აბა რისი თავი გაქვთ, მოდი აქააა!!',
            4: 'სად განაცხადა ზალიკო ბერგერმა, რომ "სორი მარა ზის ის თრუ"?',
            5: '_______ წიხლი არ უნდა გეწყინოს',
            6: 'რამდენია კაცისთვის ოთხჯერ ფეხები?',
            7: 'სულ რამდენი ხეა დედამიწაზე?',
            8: 'გვექნება თუარა დაწყებული პროექტის დასრულება ფინალურზე?',
                },
        answers: {
            1: {
                1: 'თხამ',
                2: 'კომბლემ',
                3: 'ჯეკი ჩანმა'
            },
            2: {
                1: 'გველთან, ფორმასო',
                2: 'შრეკთან, ფერსაო',
                3: 'ხართან, ფერსაო'
            },
            3: {
                1: 'სპაიდერმენი',
                2: 'კუნგფუ პანდა',
                3: 'ირმა ინაშვილი'
            },
            4: {
              1: 'სახურავზე',
              2: 'ლაივ ჩართვაში',
              3: 'ცალ ფეხზე'
            },
            5: {
              1: 'ბავშვისგან',
              2: 'სპილოსგან',
              3: 'ვირისგან'
            },
            6: {
              1: 'რვაფეხა',
              2: 'რვა',
              3: '8რვა'
            },
            7: {
              1: 'უჰჰ',
              2: 'სტო ტისიჩ',
              3: '2021'
            },
            8: {
              1: 'დიახ',
            },       
        },
        correctAnswers: {
            1: '1',
            2: '3',
            3: '3',
            4: '2',
            5: '3',
            6: '2',
            7: '1',
            8: '1',
            9: '1',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }


    // check correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    // proters the answer
    Protest = () => {
        alert("პასუხი გაპროტესტებულია")
    }


    
    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
        

            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>შემდეგი</button>
                        <button
                        className="Protest"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.Protest()}>პასუხის გაპროტესტება</button>
                    </>) : (
                                                    
                                                
                        <div className="finalPage">

                            <h1>თქვენ დაასრულეთ ტესტი</h1>
                            <p>თქვენი ქულა არის: </p>
                            <p>{score} / {Object.keys(quiestions).length}</p>
                            <p>{(score/9)*100}%</p>
                        </div>
                        
                    )
                }
            </div>

             

        );
    }
}