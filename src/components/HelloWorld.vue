<template>
  <div>
    <h1>Responsive Design</h1>
    <div class="grid">
      <div class="col-12 md:col-6 p-fluid">
        <div class="card">
          <h5>InputText</h5>
          <div class="grid formgrid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <InputText type="text" placeholder="Default"></InputText>
            </div>
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <InputText
                type="text"
                placeholder="Disabled"
                :disabled="true"
              ></InputText>
            </div>
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <InputText type="text" placeholder="Invalid" class="p-invalid" />
            </div>
          </div>

          <h5>Icons</h5>
          <div class="grid formgrid">
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <span class="p-input-icon-left">
                <i class="pi pi-user" />
                <InputText type="text" placeholder="Username" />
              </span>
            </div>
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <span class="p-input-icon-right">
                <InputText type="text" placeholder="Search" />
                <i class="pi pi-search" />
              </span>
            </div>
            <div class="col-12 mb-2 lg:col-4 lg:mb-0">
              <span class="p-input-icon-left p-input-icon-right">
                <i class="pi pi-user" />
                <InputText type="text" placeholder="Search" />
                <i class="pi pi-search" />
              </span>
            </div>
          </div>

          <h5>Float Label</h5>
          <span class="p-float-label">
            <InputText id="username" type="text" v-model="floatValue" />
            <label for="username">Username</label>
          </span>

          <h5>Textarea</h5>
          <Textarea
            placeholder="Your Message"
            :autoResize="true"
            rows="3"
            cols="30"
          />

          <h5>AutoComplete</h5>
          <AutoComplete
            placeholder="Search"
            id="dd"
            :dropdown="true"
            :multiple="true"
            v-model="selectedAutoValue"
            :suggestions="autoFilteredValue"
            @complete="searchCountry($event)"
            field="name"
          />

          <h5>Calendar</h5>
          <Calendar
            :showIcon="true"
            :showButtonBar="true"
            v-model="calendarValue"
          ></Calendar>

          <h5>Spinner</h5>
          <InputNumber
            v-model="inputNumberValue"
            showButtons
            mode="decimal"
          ></InputNumber>

          <h5>Chips</h5>
          <Chips v-model="chipsValue" />
        </div>

        <div class="card">
          <h5>Slider</h5>
          <InputText v-model.number="sliderValue" />
          <Slider v-model="sliderValue" />

          <h5>Rating</h5>
          <Rating v-model="ratingValue" />

          <h5>Input Switch</h5>
          <InputSwitch v-model="switchValue" />
        </div>
      </div>

      <div class="col-12 md:col-6">
        <div class="card">
          <h5>RadioButton</h5>
          <div class="grid">
            <div class="col-12 md:col-4">
              <div class="field-radiobutton">
                <RadioButton
                  id="option1"
                  name="option"
                  value="Option 1"
                  v-model="radioValue"
                />
                <label for="option1">Option 1</label>
              </div>
            </div>
            <div class="col-12 md:col-4">
              <div class="field-radiobutton">
                <RadioButton
                  id="option2"
                  name="option"
                  value="Option 2"
                  v-model="radioValue"
                />
                <label for="option2">Option 2</label>
              </div>
            </div>
            <div class="col-12 md:col-4">
              <div class="field-radiobutton">
                <RadioButton
                  id="option3"
                  name="option"
                  value="Option 3"
                  v-model="radioValue"
                />
                <label for="option3">Option 3</label>
              </div>
            </div>
          </div>

          <h5>Checkbox</h5>
          <div class="grid">
            <div class="col-12 md:col-4">
              <div class="field-checkbox">
                <Checkbox
                  id="checkOption1"
                  name="option"
                  value="Option 1"
                  v-model="checkboxValue"
                />
                <label for="checkOption1">Option 1</label>
              </div>
            </div>
            <div class="col-12 md:col-4">
              <div class="field-checkbox">
                <Checkbox
                  id="checkOption2"
                  name="option"
                  value="Option 2"
                  v-model="checkboxValue"
                />
                <label for="checkOption2">Option 2</label>
              </div>
            </div>
            <div class="col-12 md:col-4">
              <div class="field-checkbox">
                <Checkbox
                  id="checkOption3"
                  name="option"
                  value="Option 3"
                  v-model="checkboxValue"
                />
                <label for="checkOption3">Option 3</label>
              </div>
            </div>
          </div>
        </div>

        <div class="card p-fluid">
          <h5>Listbox</h5>
          <Listbox
            v-model="listboxValue"
            :options="listboxValues"
            optionLabel="name"
            :filter="true"
          />

          <h5>Dropdown</h5>
          <Dropdown
            v-model="dropdownValue"
            :options="dropdownValues"
            optionLabel="name"
            placeholder="Select"
          />

          <h5>MultiSelect</h5>
          <MultiSelect
            v-model="multiselectValue"
            :options="multiselectValues"
            optionLabel="name"
            placeholder="Select Countries"
            :filter="true"
          ></MultiSelect>
        </div>

        <div class="card p-fluid">
          <h5>ToggleButton</h5>
          <ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No" />

          <h5>SelectButton</h5>
          <SelectButton
            v-model="selectButtonValue1"
            :options="selectButtonValues1"
            optionLabel="name"
          />

          <h5>SelectButton - Multiple</h5>
          <SelectButton
            v-model="selectButtonValue2"
            :options="selectButtonValues2"
            optionLabel="name"
            :multiple="true"
          />
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <h5>Buttons</h5>
          <Button label="Submit" class="mr-2 mb-2" @click="themeChange"
            >Switch</Button
          >
          <Button icon="pi pi-check" class="mr-2 mb-2" />
          <Button label="Submit" icon="pi pi-check" class="mr-2 mb-2" />
          <Button
            label="Submit"
            icon="pi pi-check"
            iconPos="right"
            class="mr-2 mb-2"
          />
          <Button label="Disabled" disabled="disabled" class="mr-2 mb-2" />

          <h5>Severities</h5>
          <Button label="Primary" class="mr-2 mb-2" />
          <Button label="Secondary" class="p-button-secondary mr-2 mb-2" />
          <Button label="Success" class="p-button-success mr-2 mb-2" />
          <Button label="Info" class="p-button-info mr-2 mb-2" />
          <Button label="Warning" class="p-button-warning mr-2 mb-2" />
          <Button label="Help" class="p-button-help mr-2 mb-2" />
          <Button label="Danger" class="p-button-danger mr-2 mb-2" />

          <h5>Raised Buttons</h5>
          <Button label="Primary" class="p-button-raised mr-2 mb-2" />
          <Button
            label="Secondary"
            class="p-button-raised p-button-secondary mr-2 mb-2"
          />
          <Button
            label="Success"
            class="p-button-raised p-button-success mr-2 mb-2"
          />
          <Button
            label="Info"
            class="p-button-raised p-button-info mr-2 mb-2"
          />
          <Button
            label="Warning"
            class="p-button-raised p-button-warning mr-2 mb-2"
          />
          <Button
            label="Help"
            class="p-button-raised p-button-help mr-2 mb-2"
          />
          <Button label="Danger" class="p-button-raised p-button-danger mb-2" />

          <h5>Rounded Buttons</h5>
          <Button label="Primary" class="p-button-rounded mr-2 mb-2" />
          <Button
            label="Secondary"
            class="p-button-rounded p-button-secondary mr-2 mb-2"
          />
          <Button
            label="Success"
            class="p-button-rounded p-button-success mr-2 mb-2"
          />
          <Button
            label="Info"
            class="p-button-rounded p-button-info mr-2 mb-2"
          />
          <Button
            label="Warning"
            class="p-button-rounded p-button-warning mr-2 mb-2"
          />
          <Button
            label="Help"
            class="p-button-rounded p-button-help mr-2 mb-2"
          />
          <Button
            label="Danger"
            class="p-button-rounded p-button-danger mb-2"
          />

          <h5>Text Buttons</h5>
          <Button label="Primary" class="p-button-text mr-2 mb-2" />
          <Button
            label="Secondary"
            class="p-button-secondary p-button-text mr-2 mb-2"
          />
          <Button
            label="Success"
            class="p-button-success p-button-text mr-2 mb-2"
          />
          <Button label="Info" class="p-button-info p-button-text mr-2 mb-2" />
          <Button
            label="Warning"
            class="p-button-warning p-button-text mr-2 mb-2"
          />
          <Button label="Help" class="p-button-help p-button-text mr-2 mb-2" />
          <Button
            label="Danger"
            class="p-button-danger p-button-text mr-2 mb-2"
          />
          <Button label="Plain" class="p-button-text p-button-plain mb-2" />

          <h5>Raised Text Buttons</h5>
          <Button
            label="Primary"
            class="p-button-raised p-button-text mr-2 mb-2"
          />
          <Button
            label="Secondary"
            class="p-button-raised p-button-secondary p-button-text mr-2 mb-2"
          />
          <Button
            label="Success"
            class="p-button-raised p-button-success p-button-text mr-2 mb-2"
          />
          <Button
            label="Info"
            class="p-button-raised p-button-info p-button-text mr-2 mb-2"
          />
          <Button
            label="Warning"
            class="p-button-raised p-button-warning p-button-text mr-2 mb-2"
          />
          <Button
            label="Help"
            class="p-button-raised p-button-help p-button-text mr-2 mb-2"
          />
          <Button
            label="Danger"
            class="p-button-raised p-button-danger p-button-text mr-2 mb-2"
          />
          <Button
            label="Plain"
            class="p-button-raised p-button-plain p-button-text mb-2"
          />

          <h5>Outlined Buttons</h5>
          <Button label="Primary" class="p-button-outlined mr-2 mb-2" />
          <Button
            label="Secondary"
            class="p-button-outlined p-button-secondary mr-2 mb-2"
          />
          <Button
            label="Success"
            class="p-button-outlined p-button-success mr-2 mb-2"
          />
          <Button
            label="Info"
            class="p-button-outlined p-button-info mr-2 mb-2"
          />
          <Button
            label="Warning"
            class="p-button-outlined p-button-warning mr-2 mb-2"
          />
          <Button
            label="Help"
            class="p-button-outlined p-button-help mr-2 mb-2"
          />
          <Button
            label="Danger"
            class="p-button-outlined p-button-danger mr-2 mb-2"
          />
          <Button label="Plain" class="p-button-outlined p-button-plain mb-2" />

          <h5>Rounded Icon Buttons</h5>
          <Button icon="pi pi-check" class="p-button-rounded mr-2 mb-2" />
          <Button
            icon="pi pi-bookmark"
            class="p-button-rounded p-button-secondary mr-2 mb-2"
          />
          <Button
            icon="pi pi-search"
            class="p-button-rounded p-button-success mr-2 mb-2"
          />
          <Button
            icon="pi pi-user"
            class="p-button-rounded p-button-info mr-2 mb-2"
          />
          <Button
            icon="pi pi-bell"
            class="p-button-rounded p-button-warning mr-2 mb-2"
          />
          <Button
            icon="pi pi-heart"
            class="p-button-rounded p-button-help mr-2 mb-2"
          />
          <Button
            icon="pi pi-times"
            class="p-button-rounded p-button-danger mb-2"
          />

          <h5>Rounded Text Icon Buttons</h5>
          <Button
            icon="pi pi-check"
            class="p-button-rounded p-button-text mr-2 mb-2"
          />
          <Button
            icon="pi pi-bookmark"
            class="p-button-rounded p-button-secondary p-button-text mr-2 mb-2"
          />
          <Button
            icon="pi pi-search"
            class="p-button-rounded p-button-success p-button-text mr-2 mb-2"
          />
          <Button
            icon="pi pi-user"
            class="p-button-rounded p-button-info p-button-text mr-2 mb-2"
          />
          <Button
            icon="pi pi-bell"
            class="p-button-rounded p-button-warning p-button-text mr-2 mb-2"
          />
          <Button
            icon="pi pi-heart"
            class="p-button-rounded p-button-help p-button-text mr-2 mb-2"
          />
          <Button
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-text mr-2 mb-2"
          />

          <h5>Rounded and Outlined Icon Buttons</h5>
          <Button
            icon="pi pi-check"
            class="p-button-rounded p-button-outlined mr-2 mb-2"
          />
          <Button
            icon="pi pi-bookmark"
            class="p-button-rounded p-button-secondary p-button-outlined mr-2 mb-2"
          />
          <Button
            icon="pi pi-search"
            class="p-button-rounded p-button-success p-button-outlined mr-2 mb-2"
          />
          <Button
            icon="pi pi-user"
            class="p-button-rounded p-button-info p-button-outlined mr-2 mb-2"
          />
          <Button
            icon="pi pi-bell"
            class="p-button-rounded p-button-warning p-button-outlined mr-2 mb-2"
          />
          <Button
            icon="pi pi-heart"
            class="p-button-rounded p-button-help p-button-outlined mr-2 mb-2"
          />
          <Button
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-outlined mb-2"
          />

          <h5>Badges</h5>
          <Button type="button" label="Emails" badge="8" class="mr-2 mb-2" />
          <Button
            type="button"
            label="Messages"
            icon="pi pi-users"
            class="p-button-warning mb-2"
            badge="8"
            badgeClass="p-badge-danger"
          />

          <h5>Button Set</h5>
          <span class="p-buttonset">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
          </span>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <DataTable
            :value="customers"
            :paginator="true"
            :rows="10"
            dataKey="id"
            :rowHover="true"
            v-model:selection="selectedCustomers"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 25, 50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            responsiveLayout="scroll"
          >
            <template #header>
              <div
                class="flex flex-column md:flex-row md:justify-content-between md:align-items-center"
              >
                DataTable
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText
                    v-model="filters['global'].value"
                    placeholder="Global Search"
                  />
                </span>
              </div>
            </template>
            <template #empty> No customers found. </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column
              field="name"
              header="Name"
              :sortable="true"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                {{ slotProps.data.name }}
              </template>
            </Column>
            <Column
              header="Country"
              :sortable="true"
              sortField="country.name"
              filterField="country.name"
              filterMatchMode="contains"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                <img
                  src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                  :class="'flag flag-' + slotProps.data.country.code"
                  width="30"
                  class="mr-2"
                />
                <span class="image-text">{{
                  slotProps.data.country.name
                }}</span>
              </template>
            </Column>
            <Column
              field="status"
              header="Status"
              :sortable="true"
              filterMatchMode="equals"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                <span
                  :class="'customer-badge status-' + slotProps.data.status"
                  >{{ slotProps.data.status }}</span
                >
              </template>
            </Column>
            <Column
              field="activity"
              header="Activity"
              :sortable="true"
              filterMatchMode="gte"
              style="min-width: 16rem"
            >
              <template #body="slotProps">
                <ProgressBar
                  :value="slotProps.data.activity"
                  :showValue="false"
                  style="width: 100px"
                />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>

      <div class="col-12 md:col-6">
        <div class="card">
          <h5>AccordionPanel</h5>
          <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="Header I">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="Header II">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Header III">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
          </Accordion>
        </div>

        <div class="card">
          <h5>TabView</h5>
          <TabView>
            <TabPanel header="Header I">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p></TabPanel
            >
            <TabPanel header="Header II">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </TabPanel>
            <TabPanel header="Header III">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
          </TabView>
        </div>
      </div>

      <div class="col-12 md:col-6">
        <div class="card">
          <h5>Panel</h5>
          <Panel header="Header" :toggleable="true">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Panel>
        </div>
        <div class="card">
          <h5>Fieldset</h5>
          <Fieldset legend="Legend" :toggleable="true">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Fieldset>
        </div>
      </div>

      <div class="col-12 md:col-3">
        <div class="card p-fluid">
          <h5>Overlay Panel</h5>
          <Button
            type="button"
            label="Choose"
            @click="toggle"
            icon="pi pi-search"
          />
          <OverlayPanel
            ref="op"
            appendTo="body"
            :showCloseIcon="true"
            style="width: 450px"
            :breakpoints="{ '960px': '75vw' }"
          >
            <DataTable
              :value="products"
              v-model:selection="selectedProduct"
              selectionMode="single"
              :paginator="true"
              :rows="5"
              @row-select="onProductSelect"
            >
              <Column field="name" header="Name" sortable></Column>
              <Column header="Image">
                <template #body="slotProps">
                  <img
                    src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                    :alt="slotProps.data.image"
                    class="product-image"
                  />
                </template>
              </Column>
              <Column field="price" header="Price" sortable>
                <template #body="slotProps">
                  {{ formatCurrency(slotProps.data.price) }}
                </template>
              </Column>
            </DataTable>
          </OverlayPanel>
        </div>
      </div>

      <div class="col-12 md:col-3">
        <div class="card p-fluid">
          <h5>Dialog</h5>
          <Dialog
            header="Dialog"
            v-model:visible="display"
            :style="{ width: '50vw' }"
            :breakpoints="{ '960px': '75vw' }"
            :modal="true"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
              <Button
                label="Dismiss"
                @click="close"
                icon="pi pi-check"
                class="p-button-text"
              />
            </template>
          </Dialog>
          <Button
            label="Show"
            icon="pi pi-external-link"
            @click="open"
            class="p-button-secondary"
          />
        </div>
      </div>

      <div class="col-12 md:col-3">
        <div class="card p-fluid">
          <h5>Confirm Popup</h5>
          <Button
            type="button"
            label="Confirm"
            @click="confirmWithPopup"
            class="p-button-success"
            icon="pi pi-check"
          />
          <ConfirmPopup group="popup"></ConfirmPopup>
        </div>
      </div>
      <div class="col-12 md:col-3">
        <div class="card p-fluid">
          <h5>Confirm Dialog</h5>
          <Button
            type="button"
            label="Confirm"
            @click="confirmWithDialog"
            class="p-button-help"
            icon="pi pi-check"
          />
          <ConfirmDialog group="dialog">></ConfirmDialog>
        </div>
      </div>
      <div class="col-12">
        <div class="card card-w-title">
          <h5>Menubar</h5>
          <Menubar :model="tieredMenuItems">
            <template #end>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" placeholder="Search" />
              </span>
            </template>
          </Menubar>
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="card">
          <h5>Plain Menu</h5>
          <Menu :model="menuitems" />
        </div>
      </div>

      <div class="col-12 md:col-4">
        <div class="card">
          <h5>Overlay Menu</h5>

          <Menu ref="menu" :model="menuitems" :popup="true" />
          <Button
            type="button"
            label="Options"
            icon="pi pi-angle-down"
            @click="toggleMenu"
            style="width: auto"
          />
        </div>

        <div class="card" @contextmenu="onContextRightClick">
          <h5>ContextMenu</h5>
          Right click to display.
          <ContextMenu ref="contextMenu" :model="contextMenuItems" />
        </div>
      </div>

      <div class="col-12 lg:col-6">
        <div class="card">
          <h5>Messages</h5>
          <Message severity="info">Info Message</Message>
          <Message severity="success">Success Message</Message>
          <Message severity="warn">Warning Message</Message>
          <Message severity="error">Error Message</Message>
        </div>
      </div>

      <div class="col-12 lg:col-6">
        <div class="card">
          <h5>Toast</h5>

          <Toast />
          <Button
            @click="showToast('info')"
            label="Info"
            class="p-button-info mr-2 mb-2"
          />
          <Button
            @click="showToast('success')"
            label="Success"
            class="p-button-success mr-2 mb-2"
          />
          <Button
            @click="showToast('warn')"
            label="Warn"
            class="p-button-warning mr-2 mb-2"
          />
          <Button
            @click="showToast('error')"
            label="Error"
            class="p-button-danger mb-2"
          />
        </div>

        <div class="card">
          <h5>Timeline</h5>
          <Timeline :value="timelineEvents" align="alternate">
            <template #content="slotProps">
              {{ slotProps.item.status }}
            </template>
          </Timeline>
        </div>
      </div>

      <div class="col-12 lg:col-8">
        <div class="card">
          <h5>Inline Message</h5>
          <div class="formgroup-inline" style="margin-bottom: 0.5rem">
            <label for="username1" class="p-sr-only">Username</label>
            <InputText
              id="username1"
              type="text"
              placeholder="Username"
              class="p-invalid mr-2"
            />
            <InlineMessage>Username is required</InlineMessage>
          </div>
          <div class="formgroup-inline">
            <label for="email" class="p-sr-only">email</label>
            <InputText id="email" placeholder="Email" class="p-invalid mr-2" />
            <InlineMessage />
          </div>
        </div>
      </div>

      <div class="col-12 lg:col-4">
        <div class="card">
          <h5>Helper Text</h5>
          <div class="field p-fluid">
            <label for="username2">Username</label>
            <InputText
              id="username2"
              type="text"
              class="p-invalid"
              aria-describedby="username-help"
            />
            <small id="username-help" class="p-error"
              >Enter your username to reset your password.</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, defineComponent } from "vue";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import CustomerService from "../services/CustomerService";
import CountryService from "../services/CountryService";
import ProductService from "../services/ProductService";
import bus from "vue3-eventbus";
export default defineComponent({
  setup() {
    onMounted(() => {
      countryService.value
        .getCountries()
        .then((data) => (autoValue.value = data));
      customerService.value
        .getCustomersLarge()
        .then((data) => (customers.value = data));
      productService.value
        .getProductsSmall()
        .then((data) => (products.value = data));
    });
    const themeChange = () => {
      bus.emit("themeChange");
      console.log("fucking pressed");
    };
    const toast = useToast();
    const confirm = useConfirm();
    const customers = ref(null);
    const selectedCustomers = ref(null);
    const products = ref(null);
    const selectedProduct = ref(null);
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      "country.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    const floatValue = ref(null);
    const autoValue = ref(null);
    const selectedAutoValue = ref(null);
    const autoFilteredValue = ref([]);
    const calendarValue = ref(null);
    const inputNumberValue = ref(null);
    const chipsValue = ref(null);
    const sliderValue = ref(null);
    const ratingValue = ref(null);
    const colorValue = ref("1976D2");
    const radioValue = ref(null);
    const checkboxValue = ref([]);
    const switchValue = ref(false);
    const display = ref(false);
    const listboxValues = ref([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ]);
    const listboxValue = ref(null);
    const dropdownValues = ref([
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ]);
    const dropdownValue = ref(null);
    const multiselectValue = ref(null);
    const multiselectValues = ref([
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" },
    ]);
    const toggleValue = ref(false);
    const selectButtonValues1 = ref([
      { name: "Option 1", code: "O1" },
      { name: "Option 2", code: "O2" },
      { name: "Option 3", code: "O3" },
    ]);
    const selectButtonValue1 = ref(null);
    const selectButtonValues2 = ref([
      { name: "Option 1", code: "O1" },
      { name: "Option 2", code: "O2" },
      { name: "Option 3", code: "O3" },
    ]);
    const selectButtonValue2 = ref(null);
    const tieredMenuItems = ref([
      {
        label: "Customers",
        icon: "pi pi-fw pi-table",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
            items: [
              {
                label: "Customer",
                icon: "pi pi-fw pi-plus",
              },
              {
                label: "Duplicate",
                icon: "pi pi-fw pi-copy",
              },
            ],
          },
          {
            label: "Edit",
            icon: "pi pi-fw pi-user-edit",
          },
        ],
      },
      {
        label: "Orders",
        icon: "pi pi-fw pi-shopping-cart",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list",
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-search",
          },
        ],
      },
      {
        label: "Shipments",
        icon: "pi pi-fw pi-envelope",
        items: [
          {
            label: "Tracker",
            icon: "pi pi-fw pi-compass",
          },
          {
            label: "Map",
            icon: "pi pi-fw pi-map-marker",
          },
          {
            label: "Manage",
            icon: "pi pi-fw pi-pencil",
          },
        ],
      },
      {
        label: "Profile",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "Settings",
            icon: "pi pi-fw pi-cog",
          },
          {
            label: "Billing",
            icon: "pi pi-fw pi-file",
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: "Quit",
        icon: "pi pi-fw pi-sign-out",
      },
    ]);
    const menuitems = ref([
      {
        label: "Customers",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
          },
          {
            label: "Edit",
            icon: "pi pi-fw pi-user-edit",
          },
        ],
      },
      {
        label: "Orders",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list",
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-search",
          },
        ],
      },
    ]);
    const contextMenuItems = ref([
      {
        label: "Save",
        icon: "pi pi-save",
      },
      {
        label: "Update",
        icon: "pi pi-refresh",
      },
      {
        label: "Delete",
        icon: "pi pi-trash",
      },
      {
        separator: true,
      },
      {
        label: "Options",
        icon: "pi pi-cog",
      },
    ]);
    const message = ref([]);
    const timelineEvents = ref([
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: "pi pi-shopping-cart",
        color: "#9C27B0",
        image: "game-controller.jpg",
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: "pi pi-cog",
        color: "#673AB7",
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: "pi pi-shopping-cart",
        color: "#FF9800",
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: "pi pi-check",
        color: "#607D8B",
      },
    ]);
    const countryService = ref(new CountryService());
    const customerService = ref(new CustomerService());
    const productService = ref(new ProductService());

    const menu = ref();
    const contextMenu = ref();
    const op = ref();

    const toggleMenu = (event) => {
      menu.value.toggle(event);
    };
    const onContextRightClick = (event) => {
      contextMenu.value.show(event);
    };
    const searchCountry = (event) => {
      setTimeout(() => {
        if (!event.query.trim().length) {
          autoFilteredValue.value = [...autoValue.value];
        } else {
          autoFilteredValue.value = autoValue.value.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    };
    const addMessage = (severity) => {
      message.value = [{ severity: severity, content: "Message Detail" }];
    };
    const showToast = (severity) => {
      toast.add({
        severity: severity,
        summary: "Message Summary",
        detail: "Message Detail",
        life: 3000,
      });
    };
    const open = () => {
      display.value = true;
    };
    const close = () => {
      display.value = false;
    };
    const toggle = (event) => {
      op.value.toggle(event);
    };
    const confirmWithPopup = (event) => {
      confirm.require({
        target: event.currentTarget,
        group: "popup",
        message: "Are you sure you want to proceed?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted",
            life: 3000,
          });
        },
        reject: () => {
          toast.add({
            severity: "info",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    };
    const confirmWithDialog = () => {
      confirm.require({
        group: "dialog",
        header: "Confirm",
        message: "Are you sure you want to proceed?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted",
            life: 3000,
          });
        },
        reject: () => {
          toast.add({
            severity: "info",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    };
    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    };
    const onProductSelect = (event) => {
      op.value.hide();
      toast.add({
        severity: "info",
        summary: "Product Selected",
        detail: event.data.name,
        life: 3000,
      });
    };
    return {
      ref,
      onMounted,
      FilterMatchMode,
      FilterOperator,
      useToast,
      useConfirm,
      themeChange,
      CustomerService,
      CountryService,
      ProductService,
      toast,
      confirm,
      customers,
      selectedCustomers,
      products,
      selectedProduct,
      filters,
      floatValue,
      autoValue,
      selectedAutoValue,
      autoFilteredValue,
      calendarValue,
      inputNumberValue,
      chipsValue,
      sliderValue,
      ratingValue,
      colorValue,
      radioValue,
      checkboxValue,
      switchValue,
      display,
      listboxValues,
      listboxValue,
      dropdownValues,
      dropdownValue,
      multiselectValue,
      multiselectValues,
      toggleValue,
      selectButtonValues1,
      selectButtonValue1,
      selectButtonValues2,
      selectButtonValue2,
      tieredMenuItems,
      menuitems,
      contextMenuItems,
      message,
      timelineEvents,
      countryService,
      customerService,
      productService,
      menu,
      contextMenu,
      op,
      toggleMenu,
      onContextRightClick,
      searchCountry,
      addMessage,
      showToast,
      open,
      close,
      toggle,
      confirmWithPopup,
      confirmWithDialog,
      formatCurrency,
      onProductSelect,
    };
  },
});
</script>

<style scoped lang="scss">
html {
  font-size: 14px;
}

body {
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-weight: normal;
  color: #495057;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0.5em;
  margin-bottom: 50px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1.5rem 0 1rem 0;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.2;
  color: inherit;
}

h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.25rem;
}
h6 {
  font-size: 1rem;
}
p {
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.card {
  margin-bottom: 2rem;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}

.customer-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
}

.customer-badge.status-qualified {
  background-color: #c8e6c9;
  color: #256029;
}

.customer-badge.status-unqualified {
  background-color: #ffcdd2;
  color: #c63737;
}

.customer-badge.status-negotiation {
  background-color: #feedaf;
  color: #8a5340;
}

.customer-badge.status-new {
  background-color: #b3e5fc;
  color: #23547b;
}

.customer-badge.status-renewal {
  background-color: #eccfff;
  color: #694382;
}

.customer-badge.status-proposal {
  background-color: #ffd8b2;
  color: #805b36;
}

.product-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
}

.product-badge.status-instock {
  background: #c8e6c9;
  color: #256029;
}

.product-badge.status-outofstock {
  background: #ffcdd2;
  color: #c63737;
}

.product-badge.status-lowstock {
  background: #feedaf;
  color: #8a5340;
}

.order-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
}

.order-badge.order-delivered {
  background: #c8e6c9;
  color: #256029;
}

.order-badge.order-cancelled {
  background: #ffcdd2;
  color: #c63737;
}

.order-badge.order-pending {
  background: #feedaf;
  color: #8a5340;
}

.order-badge.order-returned {
  background: #eccfff;
  color: #694382;
}

.image-text {
  margin-left: 0.5rem;
}

.p-multiselect-representative-option {
  display: inline-block;
  vertical-align: middle;
}

.p-multiselect-representative-option img {
  vertical-align: middle;
  width: 24px;
}

.p-multiselect-representative-option span {
  margin-top: 0.125rem;
}

.country-item {
  display: flex;
  align-items: center;
}

.country-item img.flag {
  width: 18px;
  margin-right: 0.5rem;
}

.flag {
  vertical-align: middle;
}

span.flag {
  width: 44px;
  height: 30px;
  display: inline-block;
}

img.flag {
  width: 30px;
}

.true-icon {
  color: #256029;
}

.false-icon {
  color: #c63737;
}

.image-text {
  vertical-align: middle;
}

.p-progressbar {
  height: 4px;
}

.customer-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;

  &.status-qualified {
    background-color: #c8e6c9;
    color: #256029;
  }

  &.status-unqualified {
    background-color: #ffcdd2;
    color: #c63737;
  }

  &.status-negotiation {
    background-color: #feedaf;
    color: #8a5340;
  }

  &.status-new {
    background-color: #b3e5fc;
    color: #23547b;
  }

  &.status-renewal {
    background-color: #eccfff;
    color: #694382;
  }

  &.status-proposal {
    background-color: #ffd8b2;
    color: #805b36;
  }
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

::v-deep(.p-paginator) {
  .p-paginator-current {
    margin-left: auto;
  }
}
</style>
