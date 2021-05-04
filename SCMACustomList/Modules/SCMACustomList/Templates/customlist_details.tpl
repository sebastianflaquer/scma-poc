<section class="invoice-open-list">
  <header class="invoice-open-list-header">
    <h2 class="invoice-open-list-title">Stored Assets</h2>
  </header>
</section>

<div class="invoice-open-list-body">
  <div class="row stored-assets-list">
    <div class="col-sm-2 stai-id overview-home-content-table-header-row-title">
      <span>Id</span>
    </div>
    <div class="col-sm-6 stai-name overview-home-content-table-header-row-title">
      <span>Name</span>
    </div>
    <div class="col-sm-4 stai-img overview-home-content-table-header-row-title">
      <span>Image</span>
    </div>
  </div>
  {{#each assets}}
  <div class="row stored-assets-list">
    <div class="col-sm-2 stai-id">
      <span>{{id}}<span>
    </div>
    <div class="col-sm-6 stai-name">
      <span>{{name}}</span>
    </div>
    <div class="col-sm-4 stai-img">
      <img src="{{image}}" />
    </div>
  </div>
  {{/each}}

</div>
