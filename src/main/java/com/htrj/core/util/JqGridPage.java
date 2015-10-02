package com.htrj.core.util;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

public class JqGridPage<T> implements Serializable{
	public static final String ASC = "asc";
	public static final String DESC = "desc";
	private Integer start;
	private Integer row;
	private Long total;
	private String orderBy = null;
	private String order = null;

	private List<T> rows = Collections.emptyList();
}
