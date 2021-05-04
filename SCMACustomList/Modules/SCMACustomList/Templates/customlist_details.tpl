<section class="invoice-open-list">
  <header class="invoice-open-list-header">
    <h2 class="invoice-open-list-title">Stored Assets</h2>
  </header>
</section>

<div class="invoice-open-list-body">
  <div class="row stored-assets-list">
    <div class="col-sm-2 stai-id">
      <span>Id</span>
    </div>
    <div class="col-sm-4 stai-name">
      <span>Name</span>
    </div>
    <div class="col-sm-3 stai-img">
      <span>Image</span>
    </div>
    <div class="col-sm-3 stai-img">
      <span>Actions</span>
    </div>
  </div>
  {{#each assets}}

  <div class="row stored-assets-list">

    <div class="col-sm-2 stai-id">
      <span>{{id}}<span>
    </div>
    <div class="col-sm-4 stai-name">
      <span>{{name}}</span>
    </div>
    <div class="col-sm-3 stai-img">
      <img src="{{image}}" />
    </div>
    <div class="col-sm-3 stai-img">
      <a href="" class=“balance-print-button”>Edit</a> |
      <a href="" class=“balance-print-button”>Remove</a> |
      <a href="" class=“balance-print-button”>Publish</a>
    </div>
  </div>
  {{/each}}

</div>
