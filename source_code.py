import json;
from selenium import webdriver;
from selenium.webdriver.common.by import By;

f = open('data.json')
degrees_list = json.load(f);

def updateJSON():
  # Serializing json
  json_object = json.dumps(degrees_list, indent=2)
  
  # Writing to sample.json
  with open("data.json", "w") as outfile:
    outfile.write(json_object)


def function(id):

  driver = webdriver.Chrome();
  driver.get('http://results.cu.edu.eg/DarOlom/login.aspx');

  driver.find_element(By.CSS_SELECTOR, "#ContentPlaceHolder1_UserCode").send_keys(f"{id}");
  driver.find_element(By.CSS_SELECTOR, "#ContentPlaceHolder1_LoginButton").click();

  name = driver.find_element(By.CSS_SELECTOR, '#ContentPlaceHolder1_lblName').text
  degress = [];

  # Subjects Count
  for x in range(15):
    try:
      degress.append(driver.find_element(By.CSS_SELECTOR, f"#ContentPlaceHolder1_gridTerm1_lblgrade_{x}").text);
    except:
      degress.append('حجب');

  # Update Array
  degrees_list.append({
    "name": name,
    "id": id,
    "degrees": degress
  })

  # Update "data.json" file
  updateJSON()


  driver.quit()


for id in range(25485, 25508):
  function(id)

# function(20001)

