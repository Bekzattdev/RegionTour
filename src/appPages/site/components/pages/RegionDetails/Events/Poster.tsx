"use client";
import Image from "next/image";
import scss from "./Poster.module.scss";
import { FiSearch } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";

const Poster = () => {
  return (
    <section className={scss.poster}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.posterText}>
            <h1>Poster</h1>
            <div className={scss.input}>
              <a>
                <FiSearch />
              </a>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className={scss.calendar}>
            <div className={scss.calendarMain}>
              <h3>May 2024</h3>
              <a>
                <FiChevronRight />
              </a>
            </div>
            <div className={scss.allCalendar}>
              <div className={scss.calendarDay}>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
                <h4>Mo</h4>
              </div>
              <div className={scss.calendarNum}>
                <h4>1</h4>
                <h4>2</h4>
                <h4>3</h4>
                <h4>4</h4>
                <h4>5</h4>
                <h4>6</h4>
                <h4>7</h4>
                <h4>8</h4>
                <h4>9</h4>
                <h4>10</h4>
                <h4>11</h4>
                <h4>12</h4>
                <h4>13</h4>
                <h4>14</h4>
                <h4>15</h4>
                <h4>16</h4>
                <h4>17</h4>
                <h4>18</h4>
                <h4>19</h4>
                <h4>20</h4>
                <h4>21</h4>
                <h4>22</h4>
                <h4>23</h4>
                <h4>24</h4>
                <h4>25</h4>
                <h4>26</h4>
                <h4>27</h4>
                <h4>28</h4>
                <h4>29</h4>
                <h4>30</h4>
              </div>
            </div>
          </div>
          <div className={scss.posterSelect}>
            <button>All</button>
            <select>
              <option value="">Categories</option>
              <option value="">Concert</option>
              <option value="">Cinema</option>
              <option value="">Leisure</option>
              <option value="">Exhibitions</option>
              <option value="">Theater</option>
              <option value="">Master classes</option>
              <option value="">Tourism</option>
            </select>
            <button className={scss.ticket}>Only tickets</button>
          </div>
          <div className={scss.posterBlocks}>
            <div className={scss.posterBlock}>
              <img
                src="https://s3-alpha-sig.figma.com/img/dd31/982d/731589c5ba5a6e09da7f28b87ec367ce?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4hV-cNow9TstnYMw0O0-qnJARvb~OeukJVv8y5XQnrIYl37CUay0NB0T9MFUL~9fBXEr45moycGu3Izp8isKRXFal6qAaXM0syD12Oxvxr7gbix-OUDGqgafkVLOOn3f7prbeMTV3jD4pAbl2wz8J4es2LeEBl2wyXKsbA1IsJj8wxjjczZmN0Z-rr1i7ZxmnxKoZF~qjNEdKvPLVYy-yGZM6-34CvWFukza7WFsKsgHP0XYAuu1q-6WM9en3B4MrEbu9xIft-klJslGYqlWlCZOfunVQPSSKbkgZKL~xWXzssvSfJgg0NxHjZ80qUIctRGJAzLw1h01e69~rXvLA__"
                alt=""
              />
              <div className={scss.block}>
                <a>
                  <MdDateRange />
                </a>
                <h6>Concert</h6>
              </div>
              <div className={scss.posterBlockText}>
                <h4>Jah Big Solo Concert Khalib</h4>
                <h5> 2 700 - 4 500 C, 13 August at 20:00,Grape street, 1/3</h5>
              </div>
            </div>
            <div className={scss.posterBlock}>
              <img
                src="https://s3-alpha-sig.figma.com/img/dd31/982d/731589c5ba5a6e09da7f28b87ec367ce?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4hV-cNow9TstnYMw0O0-qnJARvb~OeukJVv8y5XQnrIYl37CUay0NB0T9MFUL~9fBXEr45moycGu3Izp8isKRXFal6qAaXM0syD12Oxvxr7gbix-OUDGqgafkVLOOn3f7prbeMTV3jD4pAbl2wz8J4es2LeEBl2wyXKsbA1IsJj8wxjjczZmN0Z-rr1i7ZxmnxKoZF~qjNEdKvPLVYy-yGZM6-34CvWFukza7WFsKsgHP0XYAuu1q-6WM9en3B4MrEbu9xIft-klJslGYqlWlCZOfunVQPSSKbkgZKL~xWXzssvSfJgg0NxHjZ80qUIctRGJAzLw1h01e69~rXvLA__"
                alt=""
              />
              <div className={scss.block}>
                <a>
                  <MdDateRange /> 
                </a>
                <h6>Concert</h6>
              </div>
              <div className={scss.posterBlockText}>
                <h4>Jah Big Solo Concert Khalib</h4>
                <h5> 2 700 - 4 500 C, 13 August at 20:00,Grape street, 1/3</h5>
              </div>
            </div>
            <div className={scss.posterBlock}>
              <img
                src="https://s3-alpha-sig.figma.com/img/dd31/982d/731589c5ba5a6e09da7f28b87ec367ce?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4hV-cNow9TstnYMw0O0-qnJARvb~OeukJVv8y5XQnrIYl37CUay0NB0T9MFUL~9fBXEr45moycGu3Izp8isKRXFal6qAaXM0syD12Oxvxr7gbix-OUDGqgafkVLOOn3f7prbeMTV3jD4pAbl2wz8J4es2LeEBl2wyXKsbA1IsJj8wxjjczZmN0Z-rr1i7ZxmnxKoZF~qjNEdKvPLVYy-yGZM6-34CvWFukza7WFsKsgHP0XYAuu1q-6WM9en3B4MrEbu9xIft-klJslGYqlWlCZOfunVQPSSKbkgZKL~xWXzssvSfJgg0NxHjZ80qUIctRGJAzLw1h01e69~rXvLA__"
                alt=""
              />
              <div className={scss.block}>
                <a>
                  <MdDateRange />
                </a>
                <h6>Concert</h6>
              </div>
              <div className={scss.posterBlockText}>
                <h4>Jah Big Solo Concert Khalib</h4>
                <h5> 2 700 - 4 500 C, 13 August at 20:00,Grape street, 1/3</h5>
              </div>
            </div>
            <div className={scss.posterBlock}>
              <img
                src="https://s3-alpha-sig.figma.com/img/dd31/982d/731589c5ba5a6e09da7f28b87ec367ce?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4hV-cNow9TstnYMw0O0-qnJARvb~OeukJVv8y5XQnrIYl37CUay0NB0T9MFUL~9fBXEr45moycGu3Izp8isKRXFal6qAaXM0syD12Oxvxr7gbix-OUDGqgafkVLOOn3f7prbeMTV3jD4pAbl2wz8J4es2LeEBl2wyXKsbA1IsJj8wxjjczZmN0Z-rr1i7ZxmnxKoZF~qjNEdKvPLVYy-yGZM6-34CvWFukza7WFsKsgHP0XYAuu1q-6WM9en3B4MrEbu9xIft-klJslGYqlWlCZOfunVQPSSKbkgZKL~xWXzssvSfJgg0NxHjZ80qUIctRGJAzLw1h01e69~rXvLA__"
                alt=""
              />
              <div className={scss.block}>
                <a>
                  <MdDateRange />
                </a>
                <h6>Concert</h6>
              </div>
              <div className={scss.posterBlockText}>
                <h4>Jah Big Solo Concert Khalib</h4>
                <h5> 2 700 - 4 500 C, 13 August at 20:00,Grape street, 1/3</h5>
              </div>
            </div>
            <div className={scss.posterBlock}>
              <img
                src="https://s3-alpha-sig.figma.com/img/dd31/982d/731589c5ba5a6e09da7f28b87ec367ce?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4hV-cNow9TstnYMw0O0-qnJARvb~OeukJVv8y5XQnrIYl37CUay0NB0T9MFUL~9fBXEr45moycGu3Izp8isKRXFal6qAaXM0syD12Oxvxr7gbix-OUDGqgafkVLOOn3f7prbeMTV3jD4pAbl2wz8J4es2LeEBl2wyXKsbA1IsJj8wxjjczZmN0Z-rr1i7ZxmnxKoZF~qjNEdKvPLVYy-yGZM6-34CvWFukza7WFsKsgHP0XYAuu1q-6WM9en3B4MrEbu9xIft-klJslGYqlWlCZOfunVQPSSKbkgZKL~xWXzssvSfJgg0NxHjZ80qUIctRGJAzLw1h01e69~rXvLA__"
                alt=""
              />
              <div className={scss.block}>
                <a>
                  <MdDateRange />
                </a>
                <h6>Concert</h6>
              </div>
              <div className={scss.posterBlockText}>
                <h4>Jah Big Solo Concert Khalib</h4>
                <h5> 2 700 - 4 500 C, 13 August at 20:00,Grape street, 1/3</h5>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;
