/**
 * @Module Grid builder (kendo)
 * 
 */
var myGridBuilder = (function() {
	var setting_grid = {
		pageable : true,
		scrollable : {
			virtual : true
		},
		editable : false,
		resizable : true,
		selectable : true,
		sortable : {
			mode : "single",
			allowUnsort : false
		},
		navigatable : true,
		toolbar : null,
		excel : {
			fileName : "export.xlsx",
			allPages : true
		},
		pdf : {
			allPages : true,
			avoidLinks : true,
			paperSize : "A4",
			margin : {
				top : "1cm",
				left : "1cm",
				right : "1cm",
				bottom : "1cm"
			},
			landscape : false,
			repeatHeaders : true,
			scale : 0.8,
			fileName : "export.pdf"
		}
	};
	var setting_grid_data = {
		pageSize : 0
	};
	var generateColumns = function(response) {
		var columns = response;
		return columns.map(function(col) {
			return {
				title : col.title,
				field : col.field,
				width : (!col.width) ? null : isNaN(col.width) ? col.width : col.width + "px",
				hidden : (!col.hidden || col.hidden == "false") ? false : true,
				editable : (!col.editable || col.editable == "false") ? false : col.editable,
				template : (!col.template) ? null : col.template,
				format : (!col.format) ? null : col.format
			};
		});
	};
	var generateModel = function(gridId, result, setting, fn_succ) {
		if (result.data && result.data.length && result.data.length > 99) {
			myLogger.log("<MODEL>", gridId, result.data.slice(0, 99), "... total", result.data.length);
		} else {
			myLogger.log("<MODEL>", gridId, result.data);
		}
		$("#" + gridId).data("kendoGrid").setDataSource(new kendo.data.DataSource({
			data : result.data,
			total : result.total,
			schema : (!setting || !setting.schema) ? {} : setting.schema,
			pageSize : (function() {
				var page_tmp = !setting || !setting.pageSize ? setting_grid_data.pageSize : setting.pageSize;
				return (!page_tmp || page_tmp < 1) ? result.total : page_tmp;
			})()
		}));
		if (!!fn_succ) fn_succ(gridId, result);
	};
	var generateModelStatic = function(gridId, result, setting, fn_succ) {
		if (result.data && result.data.length && result.data.length > 99) {
			myLogger.log("<MODEL>", gridId, result.data.slice(0, 99), "... total", result.data.length);
		} else {
			myLogger.log("<MODEL>", gridId, result.data);
		}
		$("#" + gridId).data("kendoGrid").setDataSource(new kendo.data.DataSource({
			data : result,
			total : result.length,
			pageSize : (function() {
				var page_tmp = !setting || !setting.pageSize ? setting_grid_data.pageSize : setting.pageSize;
				return (!page_tmp || page_tmp < 1) ? result.total : page_tmp;
			})()
		}));
		if (!!fn_succ) fn_succ(gridId, result);
	};
	var initGrid = function(gridId, columns, setting) {
		myLogger.log("<GRID:initGrid>", gridId, setting, columns);
		var grid = {
			columns : generateColumns(columns)
		};
		for ( var key in setting_grid) {
			grid[key] = !setting || !setting[key] ? setting_grid[key] : setting[key];
		}
		for ( var key in setting) {
			grid[key] = setting[key];
		}
		$("#" + gridId).html("");
		$("#" + gridId).kendoGrid(grid);
	};
	var generateGrid = function(gridId, response, setting) {
		var columns = generateColumns(response);
		myLogger.log("<GRID:generateGrid>", gridId, setting, columns);
		var grid = {
			columns : columns
		};
		for ( var key in setting_grid) {
			grid[key] = !setting || !setting[key] ? setting_grid[key] : setting[key];
		}
		for ( var key in setting) {
			grid[key] = setting[key];
		}
		$("#" + gridId).html("");
		$("#" + gridId).kendoGrid(grid);
	};
	var generateGridStatic = function(gridId, header, setting) {
		var columns = generateColumns(header);
		myLogger.log("<GRID:generateGridStatic>", gridId, setting, columns);
		var grid = {
			columns : columns
		};
		for ( var key in setting_grid) {
			grid[key] = !setting || !setting[key] ? setting_grid[key] : setting[key];
		}
		for ( var key in setting) {
			grid[key] = setting[key];
		}
		$("#" + gridId).html("");
		$("#" + gridId).kendoGrid(grid);
	};
	return {
		// set kendo-grid header from arr
		staticHeader : function(gridId, header, setting) {
			generateGridStatic(gridId, header, setting);
		},
		// set kendo-grid header from json file
		getHeader : function(gridId, filename, setting, fn_succ) {
			var url = "/static/grid_header/" + myLocale.locale() + "/" + filename + ".json";
			$.getJSON(url).done(function(response) {
				initGrid(gridId, response, setting);
				if (!!fn_succ) fn_succ();
			}).fail(function(jqxhr, textStatus, error) {
				myDataError.cb_req_err_all(jqxhr, gridId, url);
			});
		},
		// set kendo-grid header from request
		reqHeader : function(gridId, url, params, setting, fn_succ) {
			$.ajax({
				type : "POST",
				url : url,
				data : params,
				dataType : "json",
				success : function(response) {
					generateGridStatic(gridId, response, setting);
					if (!!fn_succ) fn_succ();
				},
				error : function(response) {
					myDataError.cb_req_err_all(response, gridId, url);
				}
			});
		},
		// set kendo-grid columns from request
		reqColumns : function(gridIds, url, params, fn_succ) {
			if (!gridIds) return false;
			$.ajax({
				type : "POST",
				url : url,
				data : params,
				dataType : "json",
				success : function(response) {
					if (Array.isArray(gridIds)) {
						gridIds.forEach(function(element) {
							$("#" + element).data("kendoGrid").setOptions({
								columns : generateColumns(response)
							});
						});
					} else {
						var element = gridIds;
						$("#" + element).data("kendoGrid").setOptions({
							columns : generateColumns(response)
						});
					}
					if (!!fn_succ) fn_succ();
				},
				error : function(response) {
					myDataError.cb_req_err_all(response, gridIds, url);
				}
			});
		},
		// set kendo-grid columns from json file
		getColumns : function(gridIds, filename, fn_succ) {
			var url = "/static/grid_header/" + myLocale.locale() + "/" + filename + ".json";
			$.getJSON(url).done(function(response) {
				if (Array.isArray(gridIds)) {
					gridIds.forEach(function(element) {
						$("#" + element).data("kendoGrid").setOptions({
							columns : generateColumns(response)
						});
					});
				} else {
					var element = gridIds;
					$("#" + element).data("kendoGrid").setOptions({
						columns : generateColumns(response)
					});
				}
				if (!!fn_succ) fn_succ();
			}).fail(function(jqxhr, textStatus, error) {
				myDataError.cb_req_err_all(jqxhr, gridIds, url);
			});
		},
		// set grid-model with an array
		staticModel : function(gridId, model, setting, fn_succ) {
			overlayUtil.start(gridId);
			generateModelStatic(gridId, model, setting, fn_succ);
			overlayUtil.end(gridId);
		},
		// set grid-model with an url
		reqModel : function(gridId, modelUrl, params, setting, fn_succ, bindObjs) {
			myLogger.debug_ajax_req_start(gridId, modelUrl, params);
			overlayUtil.start(gridId);
			if (!!bindObjs) {
				myBind.off(bindObjs);
			}
			$.ajax({
				type : "POST",
				url : modelUrl,
				data : params,
				dataType : "json",
				success : function(response) {
					generateModel(gridId, response, setting, fn_succ);
					overlayUtil.end(gridId);
					myBind.on(bindObjs);
				},
				error : function(response) {
					myLogger.debug_ajax_res_fail(gridId + " Model Error ", response);
					overlayUtil.end(gridId);
					myDataError.cb_req_err_all(response, gridId, modelUrl);
					myBind.on(bindObjs);
				}
			});
		}
	};
})();