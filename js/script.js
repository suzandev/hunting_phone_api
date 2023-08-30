const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(`
  https://openapi.programming-hero.com/api/phones?search=${searchText}
  `);
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones, isShowAll);
  //   console.log(phones);
};

const displayPhone = (phonesPeraMiter, isShowAll) => {
  const phoneContainer = document.getElementById("phone_container");

  // clear phone container cards before adding new cards
  phoneContainer.textContent = "";

  // display show all button if there are more than 12 phones
  const showAllContainer = document.getElementById("show_all_container");
  if (phonesPeraMiter.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  console.log("is show all", isShowAll);

  // display only first 12 phone if not show all
  if (!isShowAll) {
    phonesPeraMiter = phonesPeraMiter.slice(0, 12);
  }

  phonesPeraMiter.forEach((phone) => {
    // 1, create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 shadow-2xl p-8`;
    phoneCard.innerHTML = `
    <figure>
        <img
        src="${phone.image}"
        alt="Shoes"
        />
    </figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center">
        <button class="btn btn-neutral">Buy Now</button>
        </div>
    </div>
    </div>
    `;

    phoneContainer.appendChild(phoneCard);
  });

  // hide loading spinner
  toggleLoadingSpinner(false);
};

// handle search button
const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchInput = document.getElementById("search_input");
  const inputValue = searchInput.value;
  // console.log(inputValue);
  searchInput.value = "";
  loadPhone(inputValue, isShowAll);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading_spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// handle show all function

const handleShowAll = () => {
  handleSearch(true);
};

// loadPhone();

// ========  34-7 start hobe
