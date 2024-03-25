import React, { Component } from "react";
import SearchBar from "./searchName";
import InternBox from "./internDetails";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      showFilter: false,
      courseFilter: "",
      genderFilter: "",
      internsData: [
        {
          name: "John Okafor",
          grade: 85,
          gender: "male",
          course: "Frontend Development",
        },
        {
          name: "Jane Ali",
          grade: 92,
          gender: "female",
          course: "Product Design",
        },
        {
          name: "Michael Idibia",
          grade: 88,
          gender: "male",
          course: "Backend Development",
        },
        {
          name: "Chika Obi",
          grade: 90,
          gender: "female",
          course: "Product Design",
        },
        {
          name: "Emeka Okoro",
          grade: 85,
          gender: "male",
          course: "Backend Development",
        },
        {
          name: "Fatima Abdullahi",
          grade: 88,
          gender: "female",
          course: "Frontend Development",
        },
        {
          name: "Gideon Adeleke",
          grade: 92,
          gender: "male",
          course: "Product Design",
        },
        {
          name: "Hassan Aliyu",
          grade: 87,
          gender: "male",
          course: "Backend Development",
        },
        {
          name: "Ifeoma Nwosu",
          grade: 91,
          gender: "female",
          course: "Frontend Development",
        },
        {
          name: "Jibril Ibrahim",
          grade: 89,
          gender: "male",
          course: "Product Design",
        },
        {
          name: "Kemi Olawale",
          grade: 93,
          gender: "female",
          course: "Backend Development",
        },
        {
          name: "Lekan Ogunleye",
          grade: 86,
          gender: "male",
          course: "Frontend Development",
        },
        {
          name: "Musa Bello",
          grade: 94,
          gender: "male",
          course: "Product Design",
        },
        {
          name: "Ngozi Eze",
          grade: 89,
          gender: "female",
          course: "Backend Development",
        },
        {
          name: "Olamide Adekunle",
          grade: 90,
          gender: "male",
          course: "Frontend Development",
        },
        {
          name: "Patience Okafor",
          grade: 87,
          gender: "female",
          course: "Product Design",
        },
      ],
    };
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  toggleFilter = () => {
    this.setState((prevState) => ({ showFilter: !prevState.showFilter }));
  };

  handleFilter = (filterType, value) => {
    this.setState({ [filterType]: value });
  };

  render() {
    const { searchTerm, showFilter, courseFilter, genderFilter, internsData } =
      this.state;
    const filteredInterns = internsData.filter((intern) => {
      const nameMatch = intern.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const courseMatch = courseFilter ? intern.course === courseFilter : true;
      const genderMatch = genderFilter ? intern.gender === genderFilter : true;
      return nameMatch && courseMatch && genderMatch;
    });

    // Function to find the student with the highest grade
    const highestGradeStudent = internsData.reduce((prev, current) =>
      prev.grade > current.grade ? prev : current
    );

    return (
      <div className="dashboard">
        <SearchBar
          searchTerm={searchTerm}
          handleSearch={this.handleSearch}
          toggleFilter={this.toggleFilter}
        />

        {showFilter && (
          <div className="filter-options">
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              onChange={(e) =>
                this.handleFilter("courseFilter", e.target.value)
              }
            >
              <option value="">All</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Product Design">Product Design</option>
            </select>

            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              onChange={(e) =>
                this.handleFilter("genderFilter", e.target.value)
              }
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

              {window.innerWidth <= 768 && <FaFilter className="filter-icon" onClick={(e) => {e.stopPropagation(); toggleFilter} } />}
          </div>
        )}

        <div className="highest-grade">
          <h1>Top Student</h1>
          {highestGradeStudent && (
            <div className="highest-student box">
              <h2>{highestGradeStudent.name}</h2>
              <p className="grade">{highestGradeStudent.grade}</p>
            </div>
          )}
        </div>

        <div className="intern-details">
          <h2>All Interns</h2>
          <div className="intern-container">
            {filteredInterns.map((intern, index) => (
              <InternBox key={index} intern={intern} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
