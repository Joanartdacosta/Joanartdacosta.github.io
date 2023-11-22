import EXPERIENCE_LIST from "./experience_list";

export default function Experience() {
  return (
    <div>
      <div className="text-center max-width-56 m-auto md-max-width xl-max-width line-height-2">
        <h2 className="text-yellow m-b-4 text-title">Experience</h2>
        <div className="">
          {EXPERIENCE_LIST.map((experience) => {
            return (
              <div class="ag-format-container">
                <div class="ag-courses_box">
                  <div class="ag-courses_item">
                    <a href="#about" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">
                        {experience.title}
                      </div>

                      <div class="ag-courses-item_date-box">
                        {experience.company + " "}
                        <span class="ag-courses-item_date">
                          {experience.year}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
